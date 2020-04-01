// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    InitializeEvent(0, 15300120, 0); // Map Setup
    
    // Companions
    InitializeCommonEvent(20080000, 5300850) // Setup - Solaire of Astora
    InitializeCommonEvent(20080001, 5300850, 160760000, 160760216) // Summon - Solaire of Astora
    
    InitializeCommonEvent(20080000, 5300851) // Setup - Lautrec of Carim
    InitializeCommonEvent(20080001, 5300851, 160760001, 160760216) // Summon - Lautrec of Carim
    
    InitializeCommonEvent(20080000, 5300852) // Setup - Paladin Leeroy
    InitializeCommonEvent(20080001, 5300852, 160760002, 160760216) // Summon - Paladin Leeroy
   
    InitializeCommonEvent(20080000, 5300853) // Setup - Zullie the Witch
    InitializeCommonEvent(20080001, 5300853, 160760003, 160760216) // Summon - Zullie the Witch
    
    InitializeCommonEvent(20080000, 5300854) // Setup - Transcendent Edde
    InitializeCommonEvent(20080001, 5300854, 160760004, 160760216) // Summon - Transcendent Edde
   
    InitializeCommonEvent(20080000, 5300855) // Setup - Sellsword Luet
    InitializeCommonEvent(20080001, 5300855, 160760005, 160760216) // Summon - Sellsword Luet
    
    InitializeCommonEvent(20080000, 5300856) // Setup - Steelheart Ellie
    InitializeCommonEvent(20080001, 5300856, 160760006, 160760216) // Summon - Steelheart Ellie
    
    InitializeCommonEvent(20080000, 5300857) // Setup - Glaive Master Hodir
    InitializeCommonEvent(20080001, 5300857, 160760007, 160760216) // Summon - Glaive Master Hodir
   
    InitializeCommonEvent(20080000, 5300858) // Setup - Iron Knight Tarkus
    InitializeCommonEvent(20080001, 5300858, 160760008, 160760216) // Summon - Iron Knight Tarkus
   
    InitializeCommonEvent(20080000, 5300859) // Setup - Havel the Rock
    InitializeCommonEvent(20080001, 5300859, 160760009, 160760216) // Summon - Havel the Rock

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 250002000)
    InitializeEvent(0, 15300000, 0); // Arena
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 250002000)
    InitializeEvent(0, 15300100, 0); // Trial of Perseverance
});

Event(15300000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 15305300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 15305300);
    InitializeCommonEvent(20005941, 15305300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 15305300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 15305300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 15305300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 15305300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 15305300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 15305300);
});

// Map Setup
Event(15300120, Default, function() {
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 15300200, 0); // Disable Generators
    InitializeEvent(0, 15300203, 0); // Setup Wave Entity
    InitializeEvent(0, 15300204, 0); // Setup Enemies
});

// Trial of Perseverance
Event(15300100, Default, function() {
    WaitFixedTimeSeconds(15.0);

    // Set 1
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(0, 15300110, 5300500, 260200100, 205000); // Wave 1
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(1, 15300110, 5300501, 260200101, 205001); // Wave 2
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(2, 15300110, 5300502, 260200102, 205002); // Wave 3
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500000); 
    WaitFixedTimeSeconds(30.0);
    
    // Set 2
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(3, 15300110, 5300503, 260200103, 205003); // Wave 4
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(4, 15300110, 5300504, 260200104, 205004); // Wave 5
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(5, 15300110, 5300505, 260200105, 205005); // Wave 6

    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500010);
    WaitFixedTimeSeconds(30.0);
    
    // Set 3
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(6, 15300110, 5300506, 260200106, 205006); // Wave 7
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(7, 15300110, 5300507, 260200107, 205007); // Wave 8
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(8, 15300110, 5300508, 260200108, 205008); // Wave 9
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500020); 
    WaitFixedTimeSeconds(30.0);
    
    // Set 4
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(9, 15300110, 5300509, 260200109, 205009); // Wave 10
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(10, 15300110, 5300510, 260200110, 205010); // Wave 11
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(11, 15300110, 5300511, 260200111, 205011); // Wave 12
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500030); 
    WaitFixedTimeSeconds(30.0);
    
    // Set 5
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(12, 15300110, 5300512, 260200112, 205012); // Wave 13
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(13, 15300110, 5300513, 260200113, 205013); // Wave 14
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(14, 15300110, 5300514, 260200114, 205014); // Wave 15
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500040);
    WaitFixedTimeSeconds(30.0);
    
    // Set 6
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(15, 15300110, 5300515, 260200115, 205015); // Wave 16
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(16, 15300110, 5300516, 260200116, 205016); // Wave 17
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(17, 15300110, 5300517, 260200117, 205017); // Wave 18
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500050);
    WaitFixedTimeSeconds(30.0);
    
    // Set 7
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(18, 15300110, 5300518, 260200118, 205018); // Wave 19
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(19, 15300110, 5300519, 260200119, 205019); // Wave 20
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(20, 15300110, 5300520, 260200120, 205020); // Wave 21
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500060); 
    WaitFixedTimeSeconds(30.0);
    
    // Set 8
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(21, 15300110, 5300521, 260200121, 205021); // Wave 22
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(22, 15300110, 5300522, 260200122, 205022); // Wave 23
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(23, 15300110, 5300523, 260200123, 205023); // Wave 24
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500070); 
    WaitFixedTimeSeconds(30.0);
    
    // Set 9
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(24, 15300110, 5300524, 260200124, 205024); // Wave 25
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(25, 15300110, 5300525, 260200125, 205025); // Wave 26
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(26, 15300110, 5300526, 260200126, 205026); // Wave 27
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500080); 
    WaitFixedTimeSeconds(30.0);
    
    // Set 10
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(27, 15300110, 5300527, 260200127, 205027); // Wave 28
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(28, 15300110, 5300528, 260200128, 205028); // Wave 29
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(29, 15300110, 5300529, 260200129, 205029); // Wave 30
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500090); 
    WaitFixedTimeSeconds(30.0);
    
    // Set 11
    InitializeEvent(30, 15300110, 5300530, 260200130, 205030); // Wave 31
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500100); 
    WaitFixedTimeSeconds(30.0);
    
    AwardItemLot(800001300);
    
    WarpPlayer(40, 0, 4000970);
});

// Wave
Event(15300110, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5300500, X4_4); // HP Boost
    SetSpeffect(10000, 260200000); // Soul Boost
    SetSpeffect(10000, 260200001); // Item Discovery Boost
    DisplayBossHealthBar(Enabled, 5300500, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    //WaitFixedTimeSeconds(60.0);
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 5300500, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    //DisplayGenericDialog(99003011, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    //InitializeEvent(0, 15300202, 0); // Force Kill
    
    WaitFixedTimeSeconds(25.0);
    
    //DisplayGenericDialog(99003012, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
});

// Toggle Generators
Event(15300200, Default, function() {
    DeactivateGenerator(5300500, Disabled);
    DeactivateGenerator(5300501, Disabled);
    DeactivateGenerator(5300502, Disabled);
    DeactivateGenerator(5300503, Disabled);
    DeactivateGenerator(5300504, Disabled);
    DeactivateGenerator(5300505, Disabled);
    DeactivateGenerator(5300506, Disabled);
    DeactivateGenerator(5300507, Disabled);
    DeactivateGenerator(5300508, Disabled);
    DeactivateGenerator(5300509, Disabled);
    DeactivateGenerator(5300510, Disabled);
    DeactivateGenerator(5300511, Disabled);
    DeactivateGenerator(5300512, Disabled);
    DeactivateGenerator(5300513, Disabled);
    DeactivateGenerator(5300514, Disabled);
    DeactivateGenerator(5300515, Disabled);
    DeactivateGenerator(5300516, Disabled);
    DeactivateGenerator(5300517, Disabled);
    DeactivateGenerator(5300518, Disabled);
    DeactivateGenerator(5300519, Disabled);
    DeactivateGenerator(5300520, Disabled);
    DeactivateGenerator(5300521, Disabled);
    DeactivateGenerator(5300522, Disabled);
    DeactivateGenerator(5300523, Disabled);
    DeactivateGenerator(5300524, Disabled);
    DeactivateGenerator(5300525, Disabled);
    DeactivateGenerator(5300526, Disabled);
    DeactivateGenerator(5300527, Disabled);
    DeactivateGenerator(5300528, Disabled);
    DeactivateGenerator(5300529, Disabled);
    DeactivateGenerator(5300530, Disabled);
});

// Wave Entity Loop
Event(15300203, Default, function() {
    SetCharacterAIState(5300500, Disabled);
    SetCharacterGravity(5300500, Disabled);
    SetCharacterAnimationState(5300500, Disabled);
    WaitFixedTimeSeconds(1.0);
    EndUnconditionally(EventEndType.Restart);
});

// Enemy Setup
Event(15300204, Default, function() {
    // Enemy Wave Damage
    InitializeCommonEvent(20060010, 5300600, 260200010); // Skeleton - Scimitar
    InitializeCommonEvent(20060010, 5300601, 260200010); // Skeleton - Falchion
    InitializeCommonEvent(20060010, 5300602, 260200010); // Skeleton - Bow
    InitializeCommonEvent(20060010, 5300603, 260200010); // Skeleton - Firebomb
    InitializeCommonEvent(20060010, 5300604, 260200011); // Hollow Soldier - Straight Sword
    InitializeCommonEvent(20060010, 5300605, 260200011); // Hollow Soldier - Sword and Shield
    InitializeCommonEvent(20060010, 5300606, 260200011); // Hollow Soldier - Lantern
    InitializeCommonEvent(20060010, 5300607, 260200011); // Hollow Soldier - Crossbow
    InitializeCommonEvent(20060010, 5300608, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060010, 5300609, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060010, 5300610, 260200012); // Large Hollow Soldier - Greataxe
    InitializeCommonEvent(20060010, 5300611, 260200012); // Large Hollow Soldier - Halberd
    InitializeCommonEvent(20060010, 5300612, 260200013); // Carthus Swordsman - Sword
    InitializeCommonEvent(20060010, 5300613, 260200013); // Carthus Swordsman - Greatsword
    InitializeCommonEvent(20060010, 5300614, 260200013); // Carthus Swordsman - Bow
    InitializeCommonEvent(20060010, 5300615, 260200013); // Carthus Swordsman - Shotel
    InitializeCommonEvent(20060010, 5300616, 260200014); // Cathedral Knight - Mace
    InitializeCommonEvent(20060010, 5300617, 260200014); // Cathedral Knight - Greatsword
    InitializeCommonEvent(20060010, 5300618, 260200015); // Hollow Slave - Axe
    InitializeCommonEvent(20060010, 5300619, 260200015); // Hollow Slave - Pick
    InitializeCommonEvent(20060010, 5300620, 260200015); // Hollow Slave - Flamberge
    InitializeCommonEvent(20060010, 5300621, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060010, 5300622, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060010, 5300623, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060010, 5300624, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060010, 5300625, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060010, 5300626, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060010, 5300627, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060010, 5300628, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060010, 5300629, 260200017); // Cathedral Evangelist
    InitializeCommonEvent(20060010, 5300630, 260200018); // Peasant Hollow - Axe
    InitializeCommonEvent(20060010, 5300631, 260200018); // Peasant Hollow - Lantern
    InitializeCommonEvent(20060010, 5300632, 260200018); // Peasant Hollow - Sickle 
    InitializeCommonEvent(20060010, 5300633, 260200018); // Peasant Hollow - Mallet
    InitializeCommonEvent(20060010, 5300634, 260200018); // Peasant Hollow - Hoe
    InitializeCommonEvent(20060010, 5300635, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060010, 5300636, 260200020); // Hollow Manservant - Saw
    InitializeCommonEvent(20060010, 5300637, 260200020); // Hollow Manservant - Pot
    InitializeCommonEvent(20060010, 5300638, 260200021); // Lothric Knight - Sword
    InitializeCommonEvent(20060010, 5300639, 260200021); // Lothric Knight - Spear and Shield
    InitializeCommonEvent(20060010, 5300640, 260200021); // Lothric Knight - Greatsword
    InitializeCommonEvent(20060010, 5300641, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060010, 5300642, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060010, 5300643, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060010, 5300644, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060010, 5300645, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060010, 5300646, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060010, 5300647, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060010, 5300648, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060010, 5300649, 260200024); // Boreal Outrider Knight
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060010, 5300650, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300651, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300652, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300653, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300654, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300655, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300656, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300657, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300658, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300659, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300660, 260200027); // Lycanthrope
    InitializeCommonEvent(20060010, 5300661, 260200027); // Lycanthrope
    InitializeCommonEvent(20060010, 5300662, 260200027); // Lycanthrope
    InitializeCommonEvent(20060010, 5300663, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060010, 5300664, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060010, 5300665, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060010, 5300666, 260200029); // Serpent-man Summoner
    InitializeCommonEvent(20060010, 5300667, 260200030); // Serpent-man - Dagger
    InitializeCommonEvent(20060010, 5300668, 260200030); // Serpent-man - Hatchet
    InitializeCommonEvent(20060010, 5300669, 260200030); // Serpent-man - Axe
    InitializeCommonEvent(20060010, 5300670, 260200030); // Serpent-man - Double-bit Axe
    InitializeCommonEvent(20060010, 5300671, 260200031); // Giant Serpent-man - Chainaxe
    InitializeCommonEvent(20060010, 5300672, 260200031); // Giant Serpent-man - Greataxe
    InitializeCommonEvent(20060010, 5300673, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060010, 5300674, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060010, 5300675, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060010, 5300676, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060010, 5300677, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060010, 5300678, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060010, 5300679, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300680, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300681, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300682, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300683, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300684, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300685, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300686, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300687, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300688, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300689, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300690, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300691, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300692, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300693, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300694, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300695, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060010, 5300696, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060010, 5300697, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060010, 5300698, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060010, 5300699, 260200037); // Monstrosity of Sin
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060010, 5300700, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060010, 5300701, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060010, 5300702, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060010, 5300703, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060010, 5300704, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060010, 5300705, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060010, 5300706, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060010, 5300707, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060010, 5300708, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060010, 5300709, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060010, 5300710, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060010, 5300711, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300712, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300713, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300714, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300715, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300716, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060010, 5300717, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060010, 5300718, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060010, 5300719, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300720, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300721, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300722, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300723, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300724, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300725, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060010, 5300726, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060010, 5300727, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060010, 5300728, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060010, 5300729, 260200044); // Jailer
    InitializeCommonEvent(20060010, 5300730, 260200044); // Jailer
    InitializeCommonEvent(20060010, 5300731, 260200044); // Jailer
    InitializeCommonEvent(20060010, 5300732, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060010, 5300733, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060010, 5300734, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060010, 5300735, 260200045); // Giant Rat
    InitializeCommonEvent(20060010, 5300736, 260200045); // Giant Rat
    InitializeCommonEvent(20060010, 5300737, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300738, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300739, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300740, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300741, 260200047); // Giant Slave
    InitializeCommonEvent(20060010, 5300742, 260200048); // Demon Cleric
    InitializeCommonEvent(20060010, 5300743, 260200048); // Demon Cleric
    InitializeCommonEvent(20060010, 5300744, 260200049); // Ravenous Crystal Lizard
    InitializeCommonEvent(20060010, 5300745, 260200050); // Deep Acursed
    InitializeCommonEvent(20060010, 5300746, 260200051); // Elder Ghru
    InitializeCommonEvent(20060010, 5300747, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300748, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300749, 260200052); // Darkwraith
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060010, 5300750, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300751, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300752, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300753, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060010, 5300754, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060010, 5300755, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060010, 5300756, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300757, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300758, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300759, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300760, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300761, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300762, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300763, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300764, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300765, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300766, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300767, 260200056); // Fat Deacon
    InitializeCommonEvent(20060010, 5300768, 260200056); // Fat Deacon
    InitializeCommonEvent(20060010, 5300769, 260200056); // Fat Deacon
    InitializeCommonEvent(20060010, 5300770, 260200057); // Tall Deacon
    InitializeCommonEvent(20060010, 5300771, 260200057); // Tall Deacon
    InitializeCommonEvent(20060010, 5300772, 260200057); // Tall Deacon
    InitializeCommonEvent(20060010, 5300773, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300774, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300775, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300776, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300777, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300778, 260200059); // Irithyll Fire Witch
    InitializeCommonEvent(20060010, 5300779, 260200060); // Ringed Knight
    InitializeCommonEvent(20060010, 5300780, 260200060); // Ringed Knight
    InitializeCommonEvent(20060010, 5300781, 260200060); // Ringed Knight
    InitializeCommonEvent(20060010, 5300782, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300783, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300784, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300785, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300786, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300787, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300788, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060010, 5300789, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060010, 5300790, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060010, 5300791, 260200063); // Harald Knight
    InitializeCommonEvent(20060010, 5300792, 260200064); // Big Locust
    InitializeCommonEvent(20060010, 5300793, 260200064); // Big Locust
    InitializeCommonEvent(20060010, 5300794, 260200064); // Big Locust
    InitializeCommonEvent(20060010, 5300795, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300796, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300797, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300798, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300799, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300800, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060010, 5300801, 260200019); // Cathedral Grave Warden
    
    WaitFixedTimeSeconds(1.0);
    
    // Bug Check
    InitializeCommonEvent(20060011, 5300600, 260200010); // Skeleton - Scimitar
    InitializeCommonEvent(20060011, 5300601, 260200010); // Skeleton - Falchion
    InitializeCommonEvent(20060011, 5300602, 260200010); // Skeleton - Bow
    InitializeCommonEvent(20060011, 5300603, 260200010); // Skeleton - Firebomb
    InitializeCommonEvent(20060011, 5300604, 260200011); // Hollow Soldier - Straight Sword
    InitializeCommonEvent(20060011, 5300605, 260200011); // Hollow Soldier - Sword and Shield
    InitializeCommonEvent(20060011, 5300606, 260200011); // Hollow Soldier - Lantern
    InitializeCommonEvent(20060011, 5300607, 260200011); // Hollow Soldier - Crossbow
    InitializeCommonEvent(20060011, 5300608, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060011, 5300609, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060011, 5300610, 260200012); // Large Hollow Soldier - Greataxe
    InitializeCommonEvent(20060011, 5300611, 260200012); // Large Hollow Soldier - Halberd
    InitializeCommonEvent(20060011, 5300612, 260200013); // Carthus Swordsman - Sword
    InitializeCommonEvent(20060011, 5300613, 260200013); // Carthus Swordsman - Greatsword
    InitializeCommonEvent(20060011, 5300614, 260200013); // Carthus Swordsman - Bow
    InitializeCommonEvent(20060011, 5300615, 260200013); // Carthus Swordsman - Shotel
    InitializeCommonEvent(20060011, 5300616, 260200014); // Cathedral Knight - Mace
    InitializeCommonEvent(20060011, 5300617, 260200014); // Cathedral Knight - Greatsword
    InitializeCommonEvent(20060011, 5300618, 260200015); // Hollow Slave - Axe
    InitializeCommonEvent(20060011, 5300619, 260200015); // Hollow Slave - Pick
    InitializeCommonEvent(20060011, 5300620, 260200015); // Hollow Slave - Flamberge
    InitializeCommonEvent(20060011, 5300621, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060011, 5300622, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060011, 5300623, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060011, 5300624, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060011, 5300625, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060011, 5300626, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060011, 5300627, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060011, 5300628, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060011, 5300629, 260200017); // Cathedral Evangelist
    InitializeCommonEvent(20060011, 5300630, 260200018); // Peasant Hollow - Axe
    InitializeCommonEvent(20060011, 5300631, 260200018); // Peasant Hollow - Lantern
    InitializeCommonEvent(20060011, 5300632, 260200018); // Peasant Hollow - Sickle 
    InitializeCommonEvent(20060011, 5300633, 260200018); // Peasant Hollow - Mallet
    InitializeCommonEvent(20060011, 5300634, 260200018); // Peasant Hollow - Hoe
    InitializeCommonEvent(20060011, 5300635, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060011, 5300636, 260200020); // Hollow Manservant - Saw
    InitializeCommonEvent(20060011, 5300637, 260200020); // Hollow Manservant - Pot
    InitializeCommonEvent(20060011, 5300638, 260200021); // Lothric Knight - Sword
    InitializeCommonEvent(20060011, 5300639, 260200021); // Lothric Knight - Spear and Shield
    InitializeCommonEvent(20060011, 5300640, 260200021); // Lothric Knight - Greatsword
    InitializeCommonEvent(20060011, 5300641, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060011, 5300642, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060011, 5300643, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060011, 5300644, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060011, 5300645, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060011, 5300646, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060011, 5300647, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060011, 5300648, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060011, 5300649, 260200024); // Boreal Outrider Knight
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060011, 5300650, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300651, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300652, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300653, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300654, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300655, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300656, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300657, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300658, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300659, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300660, 260200027); // Lycanthrope
    InitializeCommonEvent(20060011, 5300661, 260200027); // Lycanthrope
    InitializeCommonEvent(20060011, 5300662, 260200027); // Lycanthrope
    InitializeCommonEvent(20060011, 5300663, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060011, 5300664, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060011, 5300665, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060011, 5300666, 260200029); // Serpent-man Summoner
    InitializeCommonEvent(20060011, 5300667, 260200030); // Serpent-man - Dagger
    InitializeCommonEvent(20060011, 5300668, 260200030); // Serpent-man - Hatchet
    InitializeCommonEvent(20060011, 5300669, 260200030); // Serpent-man - Axe
    InitializeCommonEvent(20060011, 5300670, 260200030); // Serpent-man - Double-bit Axe
    InitializeCommonEvent(20060011, 5300671, 260200031); // Giant Serpent-man - Chainaxe
    InitializeCommonEvent(20060011, 5300672, 260200031); // Giant Serpent-man - Greataxe
    InitializeCommonEvent(20060011, 5300673, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060011, 5300674, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060011, 5300675, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060011, 5300676, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060011, 5300677, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060011, 5300678, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060011, 5300679, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300680, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300681, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300682, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300683, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300684, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300685, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300686, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300687, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300688, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300689, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300690, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300691, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300692, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300693, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300694, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300695, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060011, 5300696, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060011, 5300697, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060011, 5300698, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060011, 5300699, 260200037); // Monstrosity of Sin
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060011, 5300700, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060011, 5300701, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060011, 5300702, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060011, 5300703, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060011, 5300704, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060011, 5300705, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060011, 5300706, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060011, 5300707, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060011, 5300708, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060011, 5300709, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060011, 5300710, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060011, 5300711, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300712, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300713, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300714, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300715, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300716, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060011, 5300717, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060011, 5300718, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060011, 5300719, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300720, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300721, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300722, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300723, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300724, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300725, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060011, 5300726, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060011, 5300727, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060011, 5300728, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060011, 5300729, 260200044); // Jailer
    InitializeCommonEvent(20060011, 5300730, 260200044); // Jailer
    InitializeCommonEvent(20060011, 5300731, 260200044); // Jailer
    InitializeCommonEvent(20060011, 5300732, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060011, 5300733, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060011, 5300734, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060011, 5300735, 260200045); // Giant Rat
    InitializeCommonEvent(20060011, 5300736, 260200045); // Giant Rat
    InitializeCommonEvent(20060011, 5300737, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300738, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300739, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300740, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300741, 260200047); // Giant Slave
    InitializeCommonEvent(20060011, 5300742, 260200048); // Demon Cleric
    InitializeCommonEvent(20060011, 5300743, 260200048); // Demon Cleric
    InitializeCommonEvent(20060011, 5300744, 260200049); // Ravenous Crystal Lizard
    InitializeCommonEvent(20060011, 5300745, 260200050); // Deep Acursed
    InitializeCommonEvent(20060011, 5300746, 260200051); // Elder Ghru
    InitializeCommonEvent(20060011, 5300747, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300748, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300749, 260200052); // Darkwraith
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060011, 5300750, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300751, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300752, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300753, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060011, 5300754, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060011, 5300755, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060011, 5300756, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300757, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300758, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300759, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300760, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300761, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300762, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300763, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300764, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300765, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300766, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300767, 260200056); // Fat Deacon
    InitializeCommonEvent(20060011, 5300768, 260200056); // Fat Deacon
    InitializeCommonEvent(20060011, 5300769, 260200056); // Fat Deacon
    InitializeCommonEvent(20060011, 5300770, 260200057); // Tall Deacon
    InitializeCommonEvent(20060011, 5300771, 260200057); // Tall Deacon
    InitializeCommonEvent(20060011, 5300772, 260200057); // Tall Deacon
    InitializeCommonEvent(20060011, 5300773, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300774, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300775, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300776, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300777, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300778, 260200059); // Irithyll Fire Witch
    InitializeCommonEvent(20060011, 5300779, 260200060); // Ringed Knight
    InitializeCommonEvent(20060011, 5300780, 260200060); // Ringed Knight
    InitializeCommonEvent(20060011, 5300781, 260200060); // Ringed Knight
    InitializeCommonEvent(20060011, 5300782, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300783, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300784, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300785, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300786, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300787, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300788, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060011, 5300789, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060011, 5300790, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060011, 5300791, 260200063); // Harald Knight
    InitializeCommonEvent(20060011, 5300792, 260200064); // Big Locust
    InitializeCommonEvent(20060011, 5300793, 260200064); // Big Locust
    InitializeCommonEvent(20060011, 5300794, 260200064); // Big Locust
    InitializeCommonEvent(20060011, 5300795, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300796, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300797, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300798, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300799, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300800, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060011, 5300801, 260200019); // Cathedral Grave Warden
    
    // Kill on Wave End
    // Bug Check
    InitializeCommonEvent(20060012, 5300600, 260200010); // Skeleton - Scimitar
    InitializeCommonEvent(20060012, 5300601, 260200010); // Skeleton - Falchion
    InitializeCommonEvent(20060012, 5300602, 260200010); // Skeleton - Bow
    InitializeCommonEvent(20060012, 5300603, 260200010); // Skeleton - Firebomb
    InitializeCommonEvent(20060012, 5300604, 260200011); // Hollow Soldier - Straight Sword
    InitializeCommonEvent(20060012, 5300605, 260200011); // Hollow Soldier - Sword and Shield
    InitializeCommonEvent(20060012, 5300606, 260200011); // Hollow Soldier - Lantern
    InitializeCommonEvent(20060012, 5300607, 260200011); // Hollow Soldier - Crossbow
    InitializeCommonEvent(20060012, 5300608, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060012, 5300609, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060012, 5300610, 260200012); // Large Hollow Soldier - Greataxe
    InitializeCommonEvent(20060012, 5300611, 260200012); // Large Hollow Soldier - Halberd
    InitializeCommonEvent(20060012, 5300612, 260200013); // Carthus Swordsman - Sword
    InitializeCommonEvent(20060012, 5300613, 260200013); // Carthus Swordsman - Greatsword
    InitializeCommonEvent(20060012, 5300614, 260200013); // Carthus Swordsman - Bow
    InitializeCommonEvent(20060012, 5300615, 260200013); // Carthus Swordsman - Shotel
    InitializeCommonEvent(20060012, 5300616, 260200014); // Cathedral Knight - Mace
    InitializeCommonEvent(20060012, 5300617, 260200014); // Cathedral Knight - Greatsword
    InitializeCommonEvent(20060012, 5300618, 260200015); // Hollow Slave - Axe
    InitializeCommonEvent(20060012, 5300619, 260200015); // Hollow Slave - Pick
    InitializeCommonEvent(20060012, 5300620, 260200015); // Hollow Slave - Flamberge
    InitializeCommonEvent(20060012, 5300621, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060012, 5300622, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060012, 5300623, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060012, 5300624, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060012, 5300625, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060012, 5300626, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060012, 5300627, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060012, 5300628, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060012, 5300629, 260200017); // Cathedral Evangelist
    InitializeCommonEvent(20060012, 5300630, 260200018); // Peasant Hollow - Axe
    InitializeCommonEvent(20060012, 5300631, 260200018); // Peasant Hollow - Lantern
    InitializeCommonEvent(20060012, 5300632, 260200018); // Peasant Hollow - Sickle 
    InitializeCommonEvent(20060012, 5300633, 260200018); // Peasant Hollow - Mallet
    InitializeCommonEvent(20060012, 5300634, 260200018); // Peasant Hollow - Hoe
    InitializeCommonEvent(20060012, 5300635, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060012, 5300636, 260200020); // Hollow Manservant - Saw
    InitializeCommonEvent(20060012, 5300637, 260200020); // Hollow Manservant - Pot
    InitializeCommonEvent(20060012, 5300638, 260200021); // Lothric Knight - Sword
    InitializeCommonEvent(20060012, 5300639, 260200021); // Lothric Knight - Spear and Shield
    InitializeCommonEvent(20060012, 5300640, 260200021); // Lothric Knight - Greatsword
    InitializeCommonEvent(20060012, 5300641, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060012, 5300642, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060012, 5300643, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060012, 5300644, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060012, 5300645, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060012, 5300646, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060012, 5300647, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060012, 5300648, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060012, 5300649, 260200024); // Boreal Outrider Knight
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060012, 5300650, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300651, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300652, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300653, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300654, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300655, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300656, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300657, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300658, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300659, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300660, 260200027); // Lycanthrope
    InitializeCommonEvent(20060012, 5300661, 260200027); // Lycanthrope
    InitializeCommonEvent(20060012, 5300662, 260200027); // Lycanthrope
    InitializeCommonEvent(20060012, 5300663, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060012, 5300664, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060012, 5300665, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060012, 5300666, 260200029); // Serpent-man Summoner
    InitializeCommonEvent(20060012, 5300667, 260200030); // Serpent-man - Dagger
    InitializeCommonEvent(20060012, 5300668, 260200030); // Serpent-man - Hatchet
    InitializeCommonEvent(20060012, 5300669, 260200030); // Serpent-man - Axe
    InitializeCommonEvent(20060012, 5300670, 260200030); // Serpent-man - Double-bit Axe
    InitializeCommonEvent(20060012, 5300671, 260200031); // Giant Serpent-man - Chainaxe
    InitializeCommonEvent(20060012, 5300672, 260200031); // Giant Serpent-man - Greataxe
    InitializeCommonEvent(20060012, 5300673, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060012, 5300674, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060012, 5300675, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060012, 5300676, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060012, 5300677, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060012, 5300678, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060012, 5300679, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300680, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300681, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300682, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300683, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300684, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300685, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300686, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300687, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300688, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300689, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300690, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300691, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300692, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300693, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300694, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300695, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060012, 5300696, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060012, 5300697, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060012, 5300698, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060012, 5300699, 260200037); // Monstrosity of Sin
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060012, 5300700, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060012, 5300701, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060012, 5300702, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060012, 5300703, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060012, 5300704, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060012, 5300705, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060012, 5300706, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060012, 5300707, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060012, 5300708, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060012, 5300709, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060012, 5300710, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060012, 5300711, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300712, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300713, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300714, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300715, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300716, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060012, 5300717, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060012, 5300718, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060012, 5300719, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300720, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300721, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300722, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300723, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300724, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300725, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060012, 5300726, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060012, 5300727, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060012, 5300728, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060012, 5300729, 260200044); // Jailer
    InitializeCommonEvent(20060012, 5300730, 260200044); // Jailer
    InitializeCommonEvent(20060012, 5300731, 260200044); // Jailer
    InitializeCommonEvent(20060012, 5300732, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060012, 5300733, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060012, 5300734, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060012, 5300735, 260200045); // Giant Rat
    InitializeCommonEvent(20060012, 5300736, 260200045); // Giant Rat
    InitializeCommonEvent(20060012, 5300737, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300738, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300739, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300740, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300741, 260200047); // Giant Slave
    InitializeCommonEvent(20060012, 5300742, 260200048); // Demon Cleric
    InitializeCommonEvent(20060012, 5300743, 260200048); // Demon Cleric
    InitializeCommonEvent(20060012, 5300744, 260200049); // Ravenous Crystal Lizard
    InitializeCommonEvent(20060012, 5300745, 260200050); // Deep Acursed
    InitializeCommonEvent(20060012, 5300746, 260200051); // Elder Ghru
    InitializeCommonEvent(20060012, 5300747, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300748, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300749, 260200052); // Darkwraith
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060012, 5300750, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300751, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300752, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300753, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060012, 5300754, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060012, 5300755, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060012, 5300756, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300757, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300758, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300759, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300760, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300761, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300762, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300763, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300764, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300765, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300766, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300767, 260200056); // Fat Deacon
    InitializeCommonEvent(20060012, 5300768, 260200056); // Fat Deacon
    InitializeCommonEvent(20060012, 5300769, 260200056); // Fat Deacon
    InitializeCommonEvent(20060012, 5300770, 260200057); // Tall Deacon
    InitializeCommonEvent(20060012, 5300771, 260200057); // Tall Deacon
    InitializeCommonEvent(20060012, 5300772, 260200057); // Tall Deacon
    InitializeCommonEvent(20060012, 5300773, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300774, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300775, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300776, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300777, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300778, 260200059); // Irithyll Fire Witch
    InitializeCommonEvent(20060012, 5300779, 260200060); // Ringed Knight
    InitializeCommonEvent(20060012, 5300780, 260200060); // Ringed Knight
    InitializeCommonEvent(20060012, 5300781, 260200060); // Ringed Knight
    InitializeCommonEvent(20060012, 5300782, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300783, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300784, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300785, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300786, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300787, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300788, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060012, 5300789, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060012, 5300790, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060012, 5300791, 260200063); // Harald Knight
    InitializeCommonEvent(20060012, 5300792, 260200064); // Big Locust
    InitializeCommonEvent(20060012, 5300793, 260200064); // Big Locust
    InitializeCommonEvent(20060012, 5300794, 260200064); // Big Locust
    InitializeCommonEvent(20060012, 5300795, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300796, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300797, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300798, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300799, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300800, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060012, 5300801, 260200019); // Cathedral Grave Warden
});
