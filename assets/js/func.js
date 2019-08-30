function updateSplashInfo(nr, val, val2, val3) {
    $('#splashInfo').html(val); 
}

function initGlobalMode(nr, val, val2, val3) {
    // set act mode/nav    
    $('#actMode').val(val);    
    $('#actNav').val('root');
    
    $('#splashScreen').fadeOut(() => {   
        $('.mainWrapper').fadeOut(() => {  
            $('#main_' + val).fadeIn(function() {
                $('#' + val + '_root').fadeIn();
            });
        });  
    });
}

function changeGlobalMode(nr, val, val2, val3) {
    $('#actMode').val(val);  
    switch(val) {
        case "ctrl":
            $('#main_seq').hide();
            $('#main_ctrl').show();
        break;

        case "seq":
            $('#main_ctrl').hide();
            $('#main_seq').show();
        break;
    } 
}

function changeGlobalMode2(nr, val, val2, val3) {

    $('#actMode').val(val);    
    $('#actNav').val('root');

    switch(val) {
        case "ctrl":
            $('#main_seq').hide();
            $('.menuWrapper').hide();
            $('#main_ctrl').show();
            $('#ctrl_root').show();

        break;

        case "seq":
            $('#main_ctrl').hide();
            $('.menuWrapper').hide();
            $('#main_seq').show();
            $('#seq_root').show();
        break;
    } 
}

function showMenu(nr, val, val2, val3) { 
    $('.menuWrapper').hide();
    $('#' + $('#actMode').val() + '_' + val).show();
    $('#actNav').val(val);   
}

/* UPDATE CONTROL-ELEMENTS */

function updateCtrlFader(nr, val, val2, val3) {
    nr = parseInt(nr) + 1;
    var outerHeight = $('#fader_'+nr+'_vol').height();
    var innerHeight = outerHeight / 127 * val;
    innerHeight = outerHeight - innerHeight;
    $('#fader_'+nr+'_vol .faderInner').height(innerHeight);
}

function updateCtrlBtn(nr, val, val2, val3) {
    nr = parseInt(nr) + 1;   
    if(val2 == 1) {        
        $('#btn_'+nr+'_'+val).addClass('trackBtn_on');
    } else {
        $('#btn_'+nr+'_'+val).removeClass('trackBtn_on');
    }    
}

function updateCtrlFilter(nr, val, val2, val3) {
    var knobPercent = 100 /127 * val;
    updateKnob(parseInt(nr)+1, 'filter', knobPercent);
}

function updateCtrlLow(nr, val, val2, val3) {
    var knobPercent = 100 /127 * val;
    updateKnob(parseInt(nr)+1, 'low', knobPercent);
}

function updateCtrlMid(nr, val, val2, val3) {
    var knobPercent = 100 /127 * val;
    updateKnob(parseInt(nr)+1, 'mid', knobPercent);
}

function updateCtrlHigh(nr, val, val2, val3) {
    var knobPercent = 100 /127 * val;
    updateKnob(parseInt(nr)+1, 'high', knobPercent);
}

function updateCtrlEnc(nr, val, val2, val3) {
    nr = parseInt(nr) + 1;
    $('#knob_'+nr+'_enc').html(val);    
}

function changeScene(nr, val, val2, val3) {
    $('#displayActSceneVal').html(val);
}

function setCtrlMode(nr, val, val2, val3) {
    $('#displayTrackModeVal').html(val);
    // if pickUp-mode, lock all elements    
    if(val == 'pickUp') {
        for(var i = 1; i <= 8; i++) {
            lockStaticKnob(i, 'enc', '#666666');
            lockKnob(i, 'high', '#666666');
            lockKnob(i, 'mid', '#666666');
            lockKnob(i, 'low', '#666666');
            lockKnob(i, 'filter', '#666666');
            lockStaticKnob(i, 'fader', '#666666');
        }
    }
    
}



function lockStaticKnob(nr, el, color) {    
    if(el == 'enc') {
        $('#knob_'+nr+'_'+el).addClass('bg_enc_locked');
    }
    if(el == 'fader') {
        $('#fader_'+nr+'_vol').addClass('faderOuter_locked');
    }    
}

function unlockStaticKnob(nr, el, color) {
    nr = parseInt(nr) + 1;
    if(el == 'enc') {
        $('#knob_'+nr+'_'+el).removeClass('bg_enc_locked');
    }
    if(el == 'fader') {       
        $('#fader_'+nr+'_vol').removeClass('faderOuter_locked');
    }    
}

var displayedLockedElement = '';


function unlockCtrlElement(nr, el, value) {
    
    //alert('unlockCtrlElement '+el+nr);
    $('#displayLockedTitle').hide();
    
    switch(el) {
        case 'fader':
            unlockStaticKnob(nr, 'fader', '#FFFFFF');
            updateCtrlFader(nr, value, false);
            $('#displayLocked_'+displayedLockedElement).hide();
            $('#displayLockedCtrl').hide();
        break;        
        case 'filter':             
            unlockKnob((parseInt(nr) + 1), 'filter', false);
            updateCtrlFilter(nr, value, false);  
            $('#displayLocked_poti').hide();
            $('#displayLockedCtrl').hide();          
        break;        
        case 'low':
        unlockKnob((parseInt(nr) + 1), 'low', false);
            updateCtrlFilter(nr, value, false);  
            $('#displayLocked_poti').hide();
            $('#displayLockedCtrl').hide();          
        break;        
        case 'mid':
            unlockKnob((parseInt(nr) + 1), 'mid', false);
            updateCtrlFilter(nr, value, false);  
            $('#displayLocked_poti').hide();
            $('#displayLockedCtrl').hide();          
        break;
        case 'high':
            unlockKnob((parseInt(nr) + 1), 'high', false);
            updateCtrlFilter(nr, value, false);  
            $('#displayLocked_poti').hide();
            $('#displayLockedCtrl').hide();          
        break;               
    }
    
}


function showLockedEnc(nr, val, val2, val3) {    
    if(displayedLockedElement != '') {
        $('#displayLocked_'+displayedLockedElement).hide();
    } 
    nr = parseInt(nr)+1;

    displayedLockedElement = val3;

    $('#displayLockedCtrl').show();
    $('#displayLocked_enc').show();    
    $('#displayLocked_lockedValue').html(val2);
    $('#displayLocked_encValue').html(val);  
    $('#lockedCtrlName').html(val3+' '+nr);
    $('#displayLockedTitle').show();     
}


function showLockedPoti(nr, val, val2, val3) {    
    if(displayedLockedElement != '') {
        $('#displayLocked_'+displayedLockedElement).hide();
    } 
    nr = parseInt(nr)+1;

    displayedLockedElement = val3;

    $('#displayLockedCtrl').show();
    $('#displayLocked_poti').show();    
    $('#displayLocked_lockedValue').html(val2);
    $('#displayLocked_potiValue').html(val);  
    $('#lockedCtrlName').html(val3+' '+nr);
    $('#displayLockedTitle').show();
    
    var knobPercent = 100 /127 * val;
    updateKnob('poti', 'locked', knobPercent);    
}



function showLockedFader(nr, val, val2, val3) {
    if(displayedLockedElement != '') {
        $('#displayLocked_poti').hide();
        $('#displayLocked_'+displayedLockedElement).hide();        
    }    

    nr = parseInt(nr)+1;

    displayedLockedElement = 'fader';

    $('#displayLockedCtrl').show();
    $('#displayLocked_fader').show();    
    $('#displayLocked_lockedValue').html(val2);
    $('#displayLocked_faderValue').html(val);  
    $('#lockedCtrlName').html('fader '+nr);
    $('#displayLockedTitle').show();    

    var outerHeight = $('#displayLocked_faderOuterValue').height();
    var innerHeight = outerHeight / 127 * val;
    innerHeight = outerHeight - innerHeight;
    $('#displayLocked_faderOuterValue .faderInner').height(innerHeight);    
}


function muteTrack(nr, val, val2, val3) {    
    if(val == 1) {
        $('#ctrlDisplayTrackCol_' + (parseInt(nr)+1)).css({ opacity: 0.2 });
    } else {
        $('#ctrlDisplayTrackCol_' + (parseInt(nr)+1)).css({ opacity: 1 });
    }    
}

