// This file contains the actual source code for projects that display code previews.
// Code is stored here to keep projects.ts clean and avoid massive inline strings.

export const projectCodeFiles: Record<string, string> = {
  "heropeak_generator_script.lua": `local isWorker = script.Parent and script.Parent:IsA("Actor")

if isWorker then
\t-- BACKGROUND WORKER LOGIC
\tlocal actor = script.Parent :: Actor
\tlocal ProgressEvent = actor:WaitForChild("ProgressEvent") :: BindableEvent
\t
\tlocal EROSION_ITERATIONS = 3
\tlocal MARGIN = 4
\tlocal GRID_DIM = Config.CHUNK_SIZE + 2 * MARGIN
\t
\tlocal poolHeightMap = table.create(GRID_DIM)
\tlocal poolNextMap = table.create(GRID_DIM)
\tfor i = 1, GRID_DIM do
\t\tpoolHeightMap[i] = table.create(GRID_DIM, 0)
\t\tpoolNextMap[i] = table.create(GRID_DIM, 0)
\tend
\t
\tlocal Config_CHUNK_HEIGHT = 256
\tlocal rowPoolMat = table.create(Config.CHUNK_SIZE)
\tlocal rowPoolOcc = table.create(Config.CHUNK_SIZE)
\tlocal poolMaterials = table.create(Config.CHUNK_SIZE)
\tlocal poolOccupancies = table.create(Config.CHUNK_SIZE)
\t
\tfor x = 1, Config.CHUNK_SIZE do
\t\trowPoolMat[x] = table.create(Config_CHUNK_HEIGHT)
\t\trowPoolOcc[x] = table.create(Config_CHUNK_HEIGHT)
\t\tpoolMaterials[x] = table.create(Config_CHUNK_HEIGHT)
\t\tpoolOccupancies[x] = table.create(Config_CHUNK_HEIGHT)
\t\t
\t\tfor y = 1, Config_CHUNK_HEIGHT do
\t\t\tlocal newMatRow = table.create(Config.CHUNK_SIZE, Enum.Material.Air)
\t\t\tlocal newOccRow = table.create(Config.CHUNK_SIZE, 0.0)
\t\t\trowPoolMat[x][y] = newMatRow
\t\t\trowPoolOcc[x][y] = newOccRow
\t\t\tpoolMaterials[x][y] = newMatRow
\t\t\tpoolOccupancies[x][y] = newOccRow
\t\tend
\tend
\t
\tlocal lastHeightVoxels = Config_CHUNK_HEIGHT
\tlocal emptyMatRow = table.create(Config.CHUNK_SIZE, Enum.Material.Air)
\tlocal emptyOccRow = table.create(Config.CHUNK_SIZE, 0.0)
\t
\tlocal numVoxels2D = Config.CHUNK_SIZE * Config.CHUNK_SIZE
\tlocal poolSlope = table.create(numVoxels2D, 0)
\tlocal poolCrust = table.create(numVoxels2D, 16)
\tlocal poolSnow = table.create(numVoxels2D, 0)
\tlocal poolDirt = table.create(numVoxels2D, 0)
\tlocal poolIce = table.create(numVoxels2D, 0)
\tlocal poolBreak = table.create(numVoxels2D, 0)
\t
\tlocal SharedTableRegistry = game:GetService("SharedTableRegistry")
\tlocal spiralMap = SharedTableRegistry:GetSharedTable("HeroPeakSpiralOrder")
\t
\tactor:BindToMessage("ProcessBatch", function(actorId, startIdx, endIdx, minC, CHUNK_STUD_SIZE, widthC)
\t\ttask.desynchronize()
\t\t
\t\tlocal batchTimeStart = os.clock()
\t\tfor spiralIdx = startIdx, endIdx do
\t\t\tlocal linearIdx = spiralMap[spiralIdx]
\t\t\tlocal cx = minC + ((linearIdx - 1) % widthC)
\t\t\tlocal cz = minC + math.floor((linearIdx - 1) / widthC)
\t\t\t
\t\t\tlocal worldMinX = cx * CHUNK_STUD_SIZE
\t\t\tlocal worldMinZ = cz * CHUNK_STUD_SIZE
\t\t\t
\t\t\tlocal heightMap = poolHeightMap
\t\t\tfor i = 1, GRID_DIM do
\t\t\t\tlocal vx = worldMinX + (i - MARGIN - 0.5) * Config.VOXEL_RES
\t\t\t\tfor j = 1, GRID_DIM do
\t\t\t\t\tlocal vz = worldMinZ + (j - MARGIN - 0.5) * Config.VOXEL_RES
\t\t\t\t\theightMap[i][j] = getElevation(vx, vz)
\t\t\t\tend
\t\t\tend
\t\t\t-- ... erosion, material assignment, terrain writing ...
\t\tend
\t\ttask.synchronize()
\t\tProgressEvent:Fire(actorId, (endIdx - startIdx + 1))
\tend)
else
\tlocal function generateHeroPeak()
\t\tprint("[HeroPeak] Starting generation...")
\t\tTerrain:Clear()
\t\t-- ... spiral ordering, actor spawning, dispatch loop ...
\tend
\tif plugin then
\t\tlocal toolbar = plugin:CreateToolbar("HeroPeak Generator")
\t\tlocal button = toolbar:CreateButton("Generate Mountain", "Starts 80k x 80k generation", "rbxassetid://4458901886")
\t\tbutton.Click:Connect(function() task.spawn(generateHeroPeak) end)
\telse
\t\ttask.spawn(generateHeroPeak)
\tend
end`,

  "M1Service.luau": `local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local Workspace = game:GetService("Workspace")

local CombatConfig = require(ReplicatedStorage:WaitForChild("Shared"):WaitForChild("Config"):WaitForChild("CombatConfig"))
local HitboxUtils = require(ReplicatedStorage:WaitForChild("Shared"):WaitForChild("Utils"):WaitForChild("HitboxUtils"))

local DamageService = require(script.Parent:WaitForChild("DamageService"))
local StateService = require(script.Parent:WaitForChild("StateService"))

local M1Service = {}

local VALID_FINISHER_TYPES = {
\tNormal = true,
\tUppercut = true,
\tDownslam = true,
}

local GROUND_RAYCAST_DISTANCE = 3.5
local comboTrackers = {}

local function getTracker(player)
\tlocal tracker = comboTrackers[player]
\tif tracker then return tracker end
\ttracker = {
\t\tCharacter = nil,
\t\tComboStep = 0,
\t\tLastAttackTime = 0,
\t\tAttackToken = 0,
\t\tComboResetDeadline = 0,
\t\tComboResetToken = 0,
\t}
\tcomboTrackers[player] = tracker
\treturn tracker
end

local function isCharacterAirborne(humanoid, rootPart)
\tif not humanoid or not rootPart then return false end
\tif humanoid.FloorMaterial ~= Enum.Material.Air then return false end
\tlocal raycastParams = RaycastParams.new()
\traycastParams.FilterType = Enum.RaycastFilterType.Exclude
\traycastParams.FilterDescendantsInstances = { rootPart.Parent }
\tlocal result = Workspace:Raycast(rootPart.Position, Vector3.new(0, -GROUND_RAYCAST_DISTANCE, 0), raycastParams)
\treturn result == nil
end

local function resolveFinisherType(humanoid, rootPart, clientFinisherType, comboStep)
\tif comboStep < CombatConfig.M1.MaxCombo then return "Normal" end
\tif type(clientFinisherType) ~= "string" or not VALID_FINISHER_TYPES[clientFinisherType] then return "Normal" end
\tif clientFinisherType == "Downslam" then
\t\tif isCharacterAirborne(humanoid, rootPart) then return "Downslam" end
\t\treturn "Normal"
\tend
\tif clientFinisherType == "Uppercut" then
\t\tif not isCharacterAirborne(humanoid, rootPart) then return "Uppercut" end
\t\treturn "Normal"
\tend
\treturn "Normal"
end

function M1Service:HandleM1(player, payload)
\tlocal canM1, reason = StateService:CanPerformAction(player, "M1")
\tif not canM1 then return false, reason end
\t
\tlocal character = StateService:GetCharacter(player)
\tlocal humanoid = character:FindFirstChildOfClass("Humanoid")
\tlocal rootPart = character:FindFirstChild("HumanoidRootPart")
\tif not character or not humanoid or not rootPart or humanoid.Health <= 0 then return false, "InvalidCharacter" end
\t
\tlocal tracker = getTracker(player)
\tlocal now = os.clock()
\tif tracker.Character ~= character then tracker.Character = character end
\t
\ttracker.ComboStep += 1
\tif tracker.ComboStep > CombatConfig.M1.MaxCombo then tracker.ComboStep = 1 end
\ttracker.AttackToken += 1
\t
\tlocal comboStep = tracker.ComboStep
\tlocal finisherType = resolveFinisherType(humanoid, rootPart, payload and payload.FinisherType, comboStep)
\t
\t-- Pull attacker downward for Downslam
\tif finisherType == "Downslam" then
\t\tlocal currentVelocity = rootPart.AssemblyLinearVelocity
\t\trootPart.AssemblyLinearVelocity = Vector3.new(currentVelocity.X, -CombatConfig.M1.Downslam.AttackerDownwardForce, currentVelocity.Z)
\tend
\t
\tStateService:AddState(player, "M1ing")
\tcharacter:SetAttribute("M1ComboStep", comboStep)
\t
\treturn true, { ComboStep = comboStep, FinisherType = finisherType }
end

Players.PlayerRemoving:Connect(function(player) comboTrackers[player] = nil end)

return M1Service`,

  "ParanoiaManager.luau": `local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

local Knit = require(ReplicatedStorage.Packages.Knit)
local GameConfig = require(ReplicatedStorage:WaitForChild("GameConfig"))

local ParanoiaManager = Knit.CreateService {
    Name = "ParanoiaManager",
    Client = {
        TriggerGlitch = Knit.CreateSignal(),
    },
}

local PARANOIA_MAX = 100
local PARANOIA_MIN = 0
local ISOLATION_DISTANCE = 100
local INCREASE_RATE = 2
local DECREASE_RATE = 5

local ParanoiaLevels = {}
local NextGlitchTimes = {}
local GLITCH_TYPES = {"FakeLag", "AudioCut"}

function ParanoiaManager:GetParanoiaLevel(player: Player)
    return ParanoiaLevels[player] or 0
end

function ParanoiaManager:KnitInit()
    for _, player in ipairs(Players:GetPlayers()) do
        ParanoiaLevels[player] = 0
    end
    Players.PlayerAdded:Connect(function(player)
        ParanoiaLevels[player] = 0
    end)
    Players.PlayerRemoving:Connect(function(player)
        ParanoiaLevels[player] = nil
        NextGlitchTimes[player] = nil
    end)
end

function ParanoiaManager:KnitStart()
    RunService.Heartbeat:Connect(function(deltaTime)
        local players = Players:GetPlayers()
        for i, player in ipairs(players) do
            local character = player.Character
            if not character then continue end
            local rootPart = character:FindFirstChild("HumanoidRootPart")
            if not rootPart then continue end
            
            local isAlone = true
            for j, otherPlayer in ipairs(players) do
                if i == j then continue end
                local otherCharacter = otherPlayer.Character
                if not otherCharacter then continue end
                local otherRoot = otherCharacter:FindFirstChild("HumanoidRootPart")
                if not otherRoot then continue end
                local distance = (rootPart.Position - otherRoot.Position).Magnitude
                if distance <= ISOLATION_DISTANCE then
                    isAlone = false
                    break
                end
            end
            
            local currentLevel = ParanoiaLevels[player] or 0
            if isAlone then
                currentLevel += (INCREASE_RATE * deltaTime)
            else
                currentLevel -= (DECREASE_RATE * deltaTime)
            end
            currentLevel = math.clamp(currentLevel, PARANOIA_MIN, PARANOIA_MAX)
            ParanoiaLevels[player] = currentLevel
            
            -- Glitch triggering logic
            if currentLevel > 75 then
                local now = os.clock()
                local nextGlitch = NextGlitchTimes[player]
                if not nextGlitch then
                    NextGlitchTimes[player] = now + math.random(10, 20)
                elseif now >= nextGlitch then
                    local selectedGlitch = GLITCH_TYPES[math.random(1, #GLITCH_TYPES)]
                    ParanoiaManager.Client.TriggerGlitch:Fire(player, selectedGlitch)
                    NextGlitchTimes[player] = now + math.random(10, 20)
                end
            else
                NextGlitchTimes[player] = nil
            end
        end
    end)
end

return ParanoiaManager`,
};
