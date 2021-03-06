#-------------------------------------------
#-- Ritualist Ellie
#-------------------------------------------
# -*- coding: utf-8 -*-

#----------------------------------------------------
# Main Loop
#----------------------------------------------------
def t400508_1():
    """ State 0,1 """
    assert GetCurrentStateElapsedTime() > 1
    """ State 2 """
    while True:
        call = t400508_x0() # Host Player
        assert IsClientPlayer() == 1
        """ State 3 """
        call = t400508_x1() # Client Player
        assert not IsClientPlayer()

# Host Player
def t400508_x0():
    """ State 0,1 """
    while True:
        call = t400508_x3()
        assert not GetEventStatus(1000) and not GetEventStatus(1001) and not GetEventStatus(1002)

# Client Player
def t400508_x1():
    """ State 0,1 """
    assert t400508_x2() # Clear Talk State
    """ State 2 """
    return 0

# Clear Talk State
def t400508_x2():
    """ State 0,1 """
    if not CheckSpecificPersonTalkHasEnded(0):
        """ State 7 """
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """ State 6 """
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """ State 2 """
    if CheckSpecificPersonGenericDialogIsOpen(0) == 1:
        """ State 3 """
        ForceCloseGenericDialog()
    else:
        pass
    """ State 4 """
    if CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0):
        """ State 5 """
        ForceCloseMenu()
    else:
        pass
    """ State 8 """
    return 0
    
# Check Death
def t400508_x3():
    """ State 0,1 """
    call = t400508_x4() # NPC Loop
    assert CheckSelfDeath() == 1
    return 0

# NPC Loop
def t400508_x4():
    """ State 0,5 """
    while True:
        call = t400508_x5(z4=6120, flag4=1015, flag5=6000, flag6=6000, flag7=6000, flag8=6000) # Interaction State
        if call.Done():
            """ State 3 """
            call = t400508_x8() # Menu Pre-loop
            if call.Done():
                pass
            elif IsAttackedBySomeone() == 1:
                """ State 1 """
                Label('L0')
                call = t400508_x6() # Attack Check
                def ExitPause():
                    RemoveMyAggro()
                if call.Done():
                    pass
                elif IsPlayerDead() == 1:
                    break
            elif IsPlayerDead() == 1:
                break
            elif GetDistanceToPlayer() > 3 or GetPlayerYDistance() > 0.25:
                """ State 4 """
                call = t400508_x7() # Distance Check
                if call.Done() and (GetDistanceToPlayer() < 2.5 and GetPlayerYDistance() < 0.249):
                    pass
                elif IsAttackedBySomeone() == 1:
                    Goto('L0')
        elif IsAttackedBySomeone() == 1:
            Goto('L0')
        elif IsPlayerDead() == 1:
            break
    """ State 2 """
    t400508_x2() # Clear Talk State
    
# Interaction State
def t400508_x5(z4=6120, flag4=1015, flag5=6000, flag6=6000, flag7=6000, flag8=6000):
    """ State 0,1 """
    while True:
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """ State 3 """
        assert (GetEventStatus(flag4) == 1 or GetEventStatus(flag5) == 1 or GetEventStatus(flag6) ==
                1 or GetEventStatus(flag7) == 1 or GetEventStatus(flag8) == 1)
        """ State 2 """
        if (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
            and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
        elif (not GetEventStatus(flag4) and not GetEventStatus(flag5) and not GetEventStatus(flag6) and
              not GetEventStatus(flag7) and not GetEventStatus(flag8)):
            pass
        elif CheckActionButtonArea(z4):
            break
    """ State 4 """
    return 0

# Attack Check
def t400508_x6():
    """ State 0,6 """
    assert t400508_x2() # Clear Talk State
    """ State 3 """
    assert GetCurrentStateElapsedFrames() > 1
    """ State 1 """
    assert not GetEventStatus(1016) and not GetEventStatus(1017)
    """ State 2 """
    if GetDistanceToPlayer() > 12:
        """ State 7 """
        assert t400508_x2() # Clear Talk State
    else:
        """ State 5 """
        pass
    """ State 9 """
    return 0

# Distance Check
def t400508_x7():
    """ State 0,1 """
    if (CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonMenuIsOpen(12, 0) and not
        CheckSpecificPersonGenericDialogIsOpen(0)):
        """ State 2,5 """
        if GetDistanceToPlayer() > 12:
            """ State 4 """
            Label('L0')
            assert t400508_x2() # Clear Talk State
    else:
        """ State 3 """
        Goto('L0')
    """ State 6 """
    return 0
    
# Menu Pre-loop
def t400508_x8():
    """ State 0,1 """
    assert t400508_x9()
    """ State 24 """
    return 0
    
def t400508_x9():
    c1110()
    
    while True:
        ClearTalkListData()
        
        # Training
        AddTalkListData(1, 99030500, -1)
        
        # Form Covenant
        AddTalkListDataIf(GetEventStatus(25000209) == 0, 2, 15003019, -1)
        
        # Form Betrothal
        AddTalkListDataIf(GetEventStatus(25008240) == 0 and ComparePlayerInventoryNumber(3, 2000, 2, 0, 0) == 1, 10, 15015040, -1)
        
        # Flirt
        AddTalkListDataIf(GetEventStatus(25008240) == 1, 11, 15015041, -1)
        
        # Divorce
        AddTalkListDataIf(GetEventStatus(25008240) == 1, 12, 15015042, -1)
        
        # Talk
        AddTalkListData(3, 10010200, -1)
        
        # Leave
        AddTalkListData(99, 15000005, -1)
        
        assert (not CheckSpecificPersonGenericDialogIsOpen(2) and not (CheckSpecificPersonMenuIsOpen(-1,
                2) == 1 and not CheckSpecificPersonGenericDialogIsOpen(2)))
        ShowShopMessage(1)
        
        # Training
        if GetTalkListEntryResult() == 1:
            c1111(280000, 280999)
            continue
        # Form Betrothal
        elif GetTalkListEntryResult() == 10:
            SetEventState(25008240, 1)
            PlayerEquipmentQuantityChange(3, 2000, -1)
            OpenGenericDialog(1, 99030513, 0, 0, 0)
            return 0
        # Flirt
        elif GetTalkListEntryResult() == 11:
            # Good
            if GetEventStatus(25008900):
                OpenGenericDialog(1, 99030510, 0, 0, 0)
                GetItemFromItemLot(90230)
            # Neutral
            elif GetEventStatus(25008901):
                OpenGenericDialog(1, 99030511, 0, 0, 0)
            # Bad
            elif GetEventStatus(25008902):
                OpenGenericDialog(1, 99030512, 0, 0, 0)
            continue
        # Divorce
        elif GetTalkListEntryResult() == 12:
            SetEventState(25008240, 0)
            GetItemFromItemLot(800001300)
            OpenGenericDialog(1, 99030512, 0, 0, 0)
            return 0
        # Covenant
        elif GetTalkListEntryResult() == 2:
            """ State 32,33 """
            SetEventState(25000209, 1)
            GetItemFromItemLot(800001140)
            return 0
        # Talk
        elif GetTalkListEntryResult() == 3:
            OpenGenericDialog(1, 99030501, 0, 0, 0)
            return 0
        # Covenant
        elif not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0)):
            return 0
