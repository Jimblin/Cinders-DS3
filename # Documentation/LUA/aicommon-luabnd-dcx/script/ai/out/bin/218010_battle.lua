LuaP		Ά	hηυ}A       =(none)                                      RegisterTableGoal #       GOAL_MaggotMan_Magic_218010_Battle        MaggotMan_Magic_218010        REGISTER_GOAL_NO_SUB_GOAL        Goal        Initialize 	       Activate        MaggotMan_Magic_218010_Act01        MaggotMan_Magic_218010_Act20 ,       MaggotMan_Magic_218010_ActAfter_AdjustSpace        Update 
       Terminate 
       Interrupt        Interrupt_InvadeTriggerRegion +       GOAL_MaggotMan_Magic_218010_AfterAttackAct            $                                      *                          Init_Pseudo_Global        SetStringIndexedNumber        Dist_SideStep       @       Dist_BackStep        Common_Clear_Param        IsFinishTimer                RegisterTriggerRegionObserver      ‘@       RemoveTriggerRegionObserver       Y@       GetDist        TARGET_ENE_0        GetRandam_Int       π?       GetExcelParam /       AI_EXCEL_THINK_PARAM_TYPE__thinkAttr_doAdmirer        GetEventRequest        IsInsideTarget        AI_DIR_TYPE_B       n@      4@       REGIST_FUNC        MaggotMan_Magic_218010_Act01        MaggotMan_Magic_218010_Act20 ,       MaggotMan_Magic_218010_ActAfter_AdjustSpace        Common_Battle_Activate     T         YΛΎ   Α  Y ΛΎ  Α  Y 
  
  
  E     	Y ΐ Α  T ΐ A YΑ    Α A YΑ   Α E Β Α 	Α 
 Β E 
Γ 	 	KΓ 
E  A 
 
T  IA  IΑΕ 
      
Ε 
    E  
Ε 
      
Ε           Y          r                        8@       GetMapHitRadius        TARGET_SELF       I@              @       @       Approach_Act_Flex      p§@333333@       AddSubGoal        GOAL_COMMON_AttackTunableSpin       $@       TARGET_ENE_0        GetWellSpace_Odds       Y@    3   Λ>   Ν }Λ>   }Λ>   M}LΏ   A  	Ε 
               Y 
 
Λ>   Ν  Α Ε    E       YΑ                               	          AddSubGoal        GOAL_COMMON_Turn        @       TARGET_ENE_0        GetRandam_Int       .@      4@       GetWellSpace_Odds                Ύ E    Ε  ? A 
  Y   Η Ε                                       AddSubGoal +       GOAL_MaggotMan_Magic_218010_AfterAttackAct       $@       Ύ E    Y           ’                           HasSpecialEffectId        TARGET_SELF      €΅@       RegisterTriggerRegion      ‘@      π?Ή?       @       AI_DIR_TYPE_F                GetSubGoalNum        GOAL_RESULT_Success        GOAL_RESULT_Continue        Ύ E      KΏ  A  Α E  	 
A YA Χΐ T  Ε              Ό                                      Ε                           IsLadderAct        TARGET_SELF     
   Ύ E  T                  Ρ                 	        ‘@       HasSpecialEffectId        TARGET_SELF      €΅@       IsFinishTimer                ClearSubGoal 	       SetTimer       >@       Ύ T ΛΎ   Α     U  Ώ A  T @Y Kΐ A  Y             ι     	                      GetDist        TARGET_ENE_0        GetToTargetAngle        SetStringIndexedNumber        DistMin_AAA      8@     8ΐ       DistMax_AAA       @       BaseDir_AAA        AI_DIR_TYPE_F 
       Angle_AAA      f@       DistMin_Inter_AAA       π?       DistMax_Inter_AAA       $@       BaseAng_Inter_AAA                Ang_Inter_AAA        Odds_NoAct_AAA       Y@       AddSubGoal        GOAL_COMMON_AfterAttackAct     /   Ύ E  Ώ E  KΏ   Y KΏ Α  Y KΏ A  Y KΏ Α  Y KΏ A  Y KΏ Α  Y KΏ A  Y KΏ Α  Y KΏ  A Y DΕ  Y                                     Update_Default_NoSubGoal                      2      E    Α  Y    YE "   E b      ’       β  G "  E b E ’  E β E "  E  Ε Α Y Ε  YE b E ’   