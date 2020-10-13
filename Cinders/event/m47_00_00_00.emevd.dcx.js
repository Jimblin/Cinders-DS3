// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    // Arena Steup
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25000063)
    InitializeEvent(0, 14700000, 0);
    DeactivateGenerator(4709000, Disabled);
    
    // Trial of Devastation
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 25000063)
    SetEventFlag(25000063, OFF);
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 14701000, 0);
    
    // Generators
    DeactivateGenerator(4709001, Disabled);
    DeactivateGenerator(4709002, Disabled);
    DeactivateGenerator(4709003, Disabled);
    DeactivateGenerator(4709004, Disabled);
    
    // Boss
    SetCharacterAnimationState(4700910, Disabled);
    ChangeCharacterEnableState(4700910, Disabled);
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 4700750); // Companion 1
    InitializeCommonEvent(20080000, 4700751); // Companion 2
    InitializeCommonEvent(20080000, 4700752); // Companion 3
    InitializeCommonEvent(20080000, 4700753); // Companion 4
    InitializeCommonEvent(20080000, 4700754); // Companion 5
    InitializeCommonEvent(20080000, 4700755); // Companion 6
    InitializeCommonEvent(20080000, 4700756); // Companion 7
    InitializeCommonEvent(20080000, 4700757); // Companion 8
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 47, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 4700750, 160760000, 160760200, 47, 0); // Companion 1
    InitializeCommonEvent(20080001, 4700751, 160760001, 160760200, 47, 0); // Companion 2
    InitializeCommonEvent(20080001, 4700752, 160760002, 160760200, 47, 0); // Companion 3
    InitializeCommonEvent(20080001, 4700753, 160760003, 160760200, 47, 0); // Companion 4
    InitializeCommonEvent(20080001, 4700754, 160760004, 160760200, 47, 0); // Companion 5
    InitializeCommonEvent(20080001, 4700755, 160760005, 160760200, 47, 0); // Companion 6
    InitializeCommonEvent(20080001, 4700756, 160760006, 160760200, 47, 0); // Companion 7
    InitializeCommonEvent(20080001, 4700757, 160760007, 160760200, 47, 0); // Companion 8
});
    
// Arena
Event(14700000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 14705300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14705300);
    InitializeCommonEvent(20005941, 14705300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 14705300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 14705300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 14705300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 14705300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 14705300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 14705300);
});

// Trial
Event(14701000, Default, function() {
    InitializeEvent(0, 14701010, 0); // Trial
    InitializeEvent(0, 14701020, 0); // Setup Wave Entity
    InitializeEvent(0, 14701030, 0); // Setup Wave Damage
    InitializeEvent(0, 14701040, 0); // Setup Enemy Effects
    
    // Danger Zones
    InitializeCommonEvent(20005540, 14705600, 4705600, 200, 101000, 1056964608, 0, 1065353216);
    InitializeCommonEvent(20005540, 14705601, 4705601, 200, 101000, 1056964608, 0, 1065353216);
    InitializeCommonEvent(20005540, 14705602, 4705602, 200, 101000, 1056964608, 0, 1065353216);
    InitializeCommonEvent(20005540, 14705603, 4705603, 200, 101000, 1056964608, 0, 1065353216);
    InitializeCommonEvent(20005540, 14705604, 4705604, 200, 101000, 1056964608, 0, 1065353216);
    InitializeCommonEvent(20005540, 14705605, 4705605, 200, 101000, 1056964608, 0, 1065353216);
    
    // Warp Zones
    InitializeCommonEvent(20021005, 10000, 4702520, 4705500);
    InitializeCommonEvent(20021005, 10000, 4702521, 4705501);
    InitializeCommonEvent(20021005, 10000, 4702522, 4705502);
    InitializeCommonEvent(20021005, 10000, 4702522, 4705503);
    InitializeCommonEvent(20021005, 10000, 4702522, 4705504);
    InitializeCommonEvent(20021005, 10000, 4702522, 4705505);
    InitializeCommonEvent(20021005, 10000, 4702522, 4705506);
    InitializeCommonEvent(20021005, 10000, 4702522, 4705507);
});

// Trial
Event(14701010, Default, function() {
    WaitFixedTimeSeconds(5.0);
    
    // Wave 1 - Ratatouille
    InitializeEvent(0, 14701011, 4709001, 260200300, 205030); 

    IfCharacterHPRatio(MAIN, 4700900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500300);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 2 - Wheelin' Dealin'
    InitializeEvent(0, 14701011, 4709002, 260200301, 205031); 

    IfCharacterHPRatio(MAIN, 4700900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500310);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 3 - Mimic Madness
    InitializeEvent(0, 14701011, 4709003, 260200302, 205032); 

    IfCharacterHPRatio(MAIN, 4700900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500320);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 4 - Guardians of the Kiln
    InitializeEvent(0, 14701011, 4709004, 260200303, 205033); 

    IfCharacterHPRatio(MAIN, 4700900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500330);
    
    WaitFixedTimeSeconds(10.0);
    
    // Boss - The Fallen Knight
    InitializeEvent(0, 14701012, 4700910, 260200304, 205034); 
    
    IfCharacterHPRatio(MAIN, 4700900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500340);
    
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(40, 0, 4000970);
});

// Wave State - Wave
Event(14701011, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(4700900, X4_4);
    DisplayBossHealthBar(Enabled, 4700900, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    IfCharacterHPRatio(MAIN, 4700900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 4700900, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    
    WaitFixedTimeSeconds(5.0);
});

// Wave State - Boss
Event(14701012, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(4700900, X4_4);
    DisplayBossHealthBar(Enabled, 4700900, 0, X8_4);
    
    SetCharacterAnimationState(X0_4, Enabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 280, 1060);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 905290);
    
    WaitFixedTimeSeconds(5.0);
});

// Setup Wave Entity
Event(14701020, Default, function() {
    SetCharacterAIState(4700900, Disabled);
    SetCharacterGravity(4700900, Disabled);
    SetCharacterAnimationState(4700900, Disabled);
    SetLockOnPoint(4700900, 220, Disabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Setup Wave Damage
Event(14701030, Default, function() {
    // Setup mechanics
    SkipIfCharacterHasSpeffect(3, 4705761, 260200010, true, ComparisonType.Equal, 1);
    CreateReferredDamagePair(4705761, 4700900); // Tie HP to Wave HP
    SetCharacterAIState(4705761, Enabled); // Enable AI
    SetSpeffect(4705761, 260200010);
    
    // Kill enemy if Wave is over
    IfCharacterHPRatio(AND_01, 4700900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetSpeffect(4705761, 260200002);

    EndUnconditionally(EventEndType.Restart);
});

// Setup Enemy Effects
Event(14701040, Default, function() {
    // Curses
    InitializeCommonEvent(20081010, 4705761, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 4705761, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 4705761, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 4705761, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 4705761, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 4705761, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 4705761, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 4705761, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 4705761, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 4705761, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 4705761, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 4705761, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 4705761, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 4705761, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 4705761, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 4705761, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 4705761, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 4705761, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 4705761, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 4705761, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 4705761, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 4705761, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 4705761, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 4705761, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 4705761, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 4705761, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 4705761, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 4705761, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 4705761, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 4705761, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 4705761, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 4705761, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 4705761, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 4705761, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 4705761, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 4705761, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 4705761, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 4705761, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 4705761, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 4705761, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 4705750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 4705761, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 4705770, 250002220, 25000510);  // Curse of Valor
    
    // Status Aux
    InitializeCommonEvent(20090200, 4705761, 112610); // Frostbite
    
    SetSpeffect(4705761, 260200410); // General Scaling

    EndUnconditionally(EventEndType.Restart);
});
