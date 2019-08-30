var menuDef = {
    // CONTROLLER
    ctrl: { 
        global: {
            type: 'tbl',
            btnBgColor: '#666666',
            btnBgColor2: '#666666',
            btnTxtColor: '#FFF',         
            encBgColor: '#666666',
            encBgColor2: '#666666',
            encTxtColor: '#FFF',
            encValColor: '#CCC',
            buttons: [
                {
                    text: "MIDI"
                },
                {
                    text: "DEFAULT"
                },
                {
                    text: "GLOBAL"
                }
                
            ],
            main: {
                type: "ani",
                id: "controller_global"
            },
            encoders: {}
        },       
        main: {
            type: 'dashboard',
            displayActSceneVal: 'A',
            displayTrackModeVal: '', //  pickUp / takeOver
            tracks: [
                { track: 1, state: 'active', vol: 127, lock_vol: true, trackBtn: 'on', filter: 127, lock_filter: true, eqLow: 100, lock_eqLow: true, eqMid: 60, lock_eqMid: true, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: true, },
                { track: 2, state: 'active', vol: 127, lock_vol: true, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: true, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 3, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: true, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: true, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 4, state: 'active', vol: 127, lock_vol: true, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 5, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 6, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 7, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 8, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },

                { track: 9, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 10, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 11, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 12, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 13, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 14, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 15, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 16, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },

                { track: 17, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 18, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 19, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 20, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 21, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 22, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 23, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 24, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },

                { track: 25, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 26, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 27, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 28, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 29, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 30, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 31, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, },
                { track: 32, state: 'active', vol: 127, lock_vol: false, trackBtn: 'on', filter: 127, lock_filter: false, eqLow: 100, lock_eqLow: false, eqMid: 60, lock_eqMid: false, eqHigh: 0, lock_eqHigh: false, fxBtn: 'on', fx: 4, lock_fx: false, }
            ]

        }
        
    },
    // SEQUENCER
    seq: {   
        global: {},     
        main: {
            btnBgColor: '#F9AC44',
            btnBgColor2: '#F9AC44',
            btnTxtColor: '#FFF',         
            encBgColor: '#F9AC44',
            encBgColor2: '#F9AC44',
            encTxtColor: '#FFF',
            encValColor: '#000',
            buttons: [
                {
                    text: "btn1"
                },
                {
                    text: "btn2"
                },
                {
                    text: "btn3"
                },
                {
                    text: "btn4"
                }
            ],
            main: {
                type: "tbl",
                tblCell: [
                    {
                        type: 'txt',
                        val: "cell1"
                    },
                    {
                        type: 'wave',
                        val: "saw" // sine, square, saw
                    },
                    {
                        type: 'wave',
                        val: "square"
                    },
                    {
                        type: 'wave',
                        val: "sine"
                    }
                ]
            },
            encoders: [
                {
                    text: "enc1",
                    val: "val1"
                },
                {
                    text: "enc2",
                    val: "val2"
                },
                {
                    text: "enc3",
                    val: "val3"
                },
                {
                    text: "enc4",
                    val: "val4"
                }
            ]
        }
    }    
};
