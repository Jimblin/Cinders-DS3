LuaP		Ά	hηυ}A       =(none)                              RegisterTableGoal !       GOAL_DarkBloodSlug_113010_Battle        REGISTER_GOAL_NO_SUB_GOAL        Goal        Initialize 	       Activate        Update 
       ActBase01      t§@       Act01 
       ActBase02     τ.A       Act02        AfterAction                                       _COMMON_InitEnemyAct                 Y           #                           _COMMON_SetEnemyActRate       π?       ForceWalkDist      8@       ForceRunDist        RunRate         
       GuardRare        BackStepRate        StepFrontRate        StepFrontInterval        IsBack       Y@       GetDist        TARGET_ENE_0        GetExcelParam /       AI_EXCEL_THINK_PARAM_TYPE__thinkAttr_doAdmirer        GetTeamOrder        ORDER_TYPE_Role        HasSpecialEffectId        TARGET_SELF      ΅@       SetStringIndexedNumber 
       ActRate01 
       ActRate02        _COMMON_SelectEnemyAct         AfterAction     A            A  YI?~ I? 	ΐ 	ΐ 	@ 	ΐ 	@   Ι  ΛΑ  KΒ  ΛΒ  KΓ  	A 
    Δ Α 	 
Y Τ  Δ  	 
Y E      	  
   Ε     	  
     FE    	  
   Y          c                           GetSubGoalNum                GOAL_RESULT_Success        GOAL_RESULT_Continue     	   > ΧΎ T     Ε             v                         t§@      D@       ForceWalkDist                ForceRunDist        RunRate 
       GuardRare        AddSubGoal        GOAL_EnemyBeforeAttack       @       TARGET_ENE_0        BackStepRate        StepFrontRate        StepFrontInterval        IsBack        GOAL_EnemyMultiAttack       4@      Y@    !     A  LΏ~~ LΏ~ IΏ I? K@ A 	 
   ? ? Ζ? @ FA A ΖA B YK@Ε  	 
   YA                                     t§@               ForceWalkDist        ForceRunDist        RunRate 
       GuardRare        AddSubGoal        GOAL_EnemyBeforeAttack       @       TARGET_ENE_0        BackStepRate        StepFrontRate        StepFrontInterval        IsBack        GOAL_EnemyMultiAttack       4@      Y@    !     A  ΜΎ}~ ΜΎ}~ Ι> ΙΎ @Ε  	E 
E   ? F? ? Ζ? A FA A ΖA Y@ Α 	E 
   Y            Ά                 
           GetRandam_Float               Y@      @       AddSubGoal        GOAL_EnemyAfterAttack        @      @       TARGET_ENE_0        Ύ ΛΎ   Α   Χ              	Λ?
 ΛΎ Α   E E          Y 
        E  A  Y    E   Y Ε   "  I  Ε   b  I Ε   ’  I  Ε   ΐ Ε   β  I Ε   IA Ε   " I  Ε   b I   