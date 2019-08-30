var menu = {
    // CONTROLLER
    controller: {
        global: {
            type: 'static',
            main: {
                type: 'static',
                content: '<div class="menuMain">GLOBAL MENU<br><div class="menuMainSub">CONTROLLER</div></div>'
            },                    
            buttons: {  
                BACK: {
                    color: '#FFF',
                    bgColor: '#1D1D1D', 
                },                      
                MIDI: { 
                    color: '#FFF',
                    bgColor: '#666',  
                    main: {
                        type: 'static',
                        content: '<div class="menuMain">MIDI MENU<br><div class="menuMainSub">CONTROLLER</div></div>'
                    },                        
                    buttons: {  
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },                               
                        PORTS: {
                            color: '#FFF',
                            bgColor: '#666',
                            main: {
                                type: 'options'
                            },
                            buttons: {
                                BACK: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D', 
                                }
                            },
                            encoders: {                                       
                                port: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                in: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                out: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                thru: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                clock: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                }
                            }
                        },
                        MAPPING: {
                            color: '#FFF',
                            bgColor: '#666',
                            main: {
                                type: 'file',
                                func: 'generateFileInput',
                                param: 'LOAD MAPPING'
                            },
                            buttons: {
                                BACK: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D', 
                                }, 
                                functions: [
                                    {
                                        label: 'SAVE MAPPING',
                                        color: '#FFF',
                                        bgColor: '#9BAC2C',
                                        pos: 2, 
                                        main: {
                                            type: 'file',
                                            func: 'generateFileInput',
                                            param: 'SAVE MAPPING'
                                        },
                                        buttons: {
                                            BACK: {
                                                color: '#FFF',
                                                bgColor: '#1D1D1D', 
                                            }, 
                                            functions: [
                                                {
                                                    label: 'SAVE',
                                                    pos: 4,
                                                    color: '#FFF',
                                                    bgColor: '#9BAC2C',
                                                    main: {
                                                        type: 'file'
                                                    },
                                                    buttons: {
                                                        BACK: {
                                                            color: '#FFF',
                                                            bgColor: '#1D1D1D', 
                                                        } 
                                                    },
                                                    encoders: {}
                                                }
                                            ]
                                                
                                        },
                                        encoders: {}
                                    },
                                    {
                                        label: 'LOAD',
                                        color: '#FFF',
                                        bgColor: '#64AEED',
                                        pos: 4 
                                    },
                                ]
                            },
                            encoders: {                                       
                                file: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    label: 'LOAD MAPPING'
                                }
                            }
                        }
                    } 
                },
                DEFAULT: { 
                    color: '#FFF',
                    bgColor: '#666',
                    color: '#FFF',
                    bgColor: '#666',
                    main: {
                        type: 'file',
                        func: 'generateFileInput',
                        param: 'SAVE DEFAULT MAPPING'
                    }, 
                    buttons: {
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        }, 
                        functions: [
                            {
                                label: 'SAVE',
                                color: '#FFF',
                                bgColor: '#9BAC2C',
                                pos: 4
                            }
                        ]
                            
                    },
                    encoders: {}
                }                    
            },
            encoders: 'none'
        },
        main: {
            buttons: {},
            encoders: {}
        }
    },
    // SEQUENCER
    sequencer: {
        global: {
            type: 'static',
            main: {
                type: 'static',
                content: '<div class="menuMain">GLOBAL MENU<br><div class="menuMainSub">SEQUENCER</div></div>'
            },                    
            buttons: { 
                BACK: {
                    color: '#FFF',
                     bgColor: '#1D1D1D', 
                },                       
                MIDI: { 
                    color: '#FFF',
                    bgColor: '#666',    
                    main: {
                        type: 'static',
                        content: '<div class="menuMain">MIDI MENU<br><div class="menuMainSub">SEQUENCER</div></div>'
                    },                      
                    buttons: { 
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },
                        CLOCK: {
                            color: '#FFF',
                            bgColor: '#666',
                            main: {
                                type: 'options'
                            },
                            buttons: {
                                BACK: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D', 
                                }
                            },
                            encoders: {                                       
                                clock: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                }
                            }
                        },                               
                        PORTS: {
                            color: '#FFF',
                            bgColor: '#666',
                            main: {
                                type: 'options'
                            },
                            buttons: {
                                BACK: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D', 
                                }
                            },
                            encoders: {                                       
                                port: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                in: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                out: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                thru: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                },
                                clock: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    labelVal: '',
                                    colorVal: '#666',
                                }
                            }
                        },
                        MAPPING: {
                            color: '#FFF',
                            bgColor: '#666',
                            main: {
                                type: 'file',
                                func: 'generateFileInput',
                                param: 'LOAD MAPPING'
                            },
                            buttons: {
                                BACK: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D', 
                                },
                                functions: [
                                    {
                                        label: 'SAVE MAPPING',
                                        color: '#FFF',
                                        bgColor: '#9BAC2C',
                                        pos: 2, 
                                        main: {
                                            type: 'file',
                                            func: 'generateFileInput',
                                            param: 'SAVE MAPPING'
                                        },
                                        buttons: {
                                            BACK: {
                                                color: '#FFF',
                                                bgColor: '#1D1D1D', 
                                            },
                                            functions: [
                                                {
                                                    label: 'SAVE',
                                                    pos: 4,
                                                    color: '#FFF',
                                                    bgColor: '#9BAC2C',
                                                    main: {
                                                        type: 'file'
                                                    },
                                                    buttons: {},
                                                    encoders: {}
                                                }
                                            ]
                                                
                                        },
                                        encoders: {}
                                    },
                                    {
                                        label: 'LOAD',
                                        color: '#FFF',
                                        bgColor: '#64AEED',
                                        pos: 4 
                                    },
                                ]
                            },
                            encoders: {                                       
                                file: {
                                    color: '#FFF',
                                    bgColor: '#1D1D1D',
                                    label: 'LOAD MAPPING'
                                }
                            }
                        }
                    } 
                },
                PROJECT: { 
                    color: '#FFF',
                    bgColor: '#666',
                    color: '#FFF',
                    bgColor: '#666',
                    main: {
                        type: 'file',
                        func: 'generateFileInput',
                        param: 'LOAD PROJECT'                                
                    }, 
                    buttons: {
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },
                        functions: [
                            {
                                label: 'SAVE PROJECT',
                                color: '#FFF',
                                bgColor: '#9BAC2C',
                                pos: 2, 
                                main: {
                                    type: 'file',
                                    func: 'generateFileInput',
                                    param: 'SAVE PROJECT'
                                },
                                buttons: {
                                    BACK: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D', 
                                    },
                                    functions: [
                                        {
                                            label: 'SAVE',
                                            pos: 4,
                                            color: '#FFF',
                                            bgColor: '#9BAC2C',
                                            main: {
                                                type: 'file'
                                            },
                                            buttons: {},
                                            encoders: {}
                                        }
                                    ]
                                                
                                },
                                encoders: {
                                    file: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D',
                                        label: 'LOAD MAPPING'
                                    }
                                }
                            },
                            {
                                label: 'LOAD',
                                color: '#FFF',
                                bgColor: '#64AEED',
                                pos: 4,
                                main: {
                                    type: 'file',
                                    func: 'generateFileInput',
                                    param: 'SAVE PROJECT'
                                },
                                buttons: { 
                                    BACK: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D', 
                                    }
                                },
                                encoders: {
                                    file: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D',
                                        label: 'LOAD MAPPING'
                                    }
                                }
                            }
                        ]
                            
                    },
                    encoders: {}
                },
                DEFAULT: { 
                    color: '#FFF',
                    bgColor: '#666',
                    color: '#FFF',
                    bgColor: '#666',
                    main: {
                        type: 'file',
                        func: 'generateFileInput',
                        param: 'SAVE DEFAULT MAPPING'
                    }, 
                    buttons: {
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },
                        functions: [
                            {
                                label: 'SAVE',
                                color: '#FFF',
                                bgColor: '#9BAC2C',
                                pos: 4
                            }
                        ]
                            
                    },
                    encoders: {}
                }                    
            },
            encoders: 'none'
        },
        track: {
            type: 'options',
            main: {
                type: 'options'                        
            },
            buttons: {
                EDIT: {
                    color: '#FFF',
                    bgColor: '#666666',
                    main: {
                        type: 'options'                        
                    },
                    buttons: {
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },
                    },
                    encoders: {
                        trackBtn: {
                            color: '#FFF',
                            bgColor: '#666666', 
                        },
                        fxBtn: {
                            color: '#FFF',
                            bgColor: '#666666', 
                        }
                    }
                },
                LFO1: {
                    color: '#FFF',
                    bgColor: '#64AEED',
                    main: {
                        type: 'options'
                    },
                    buttons: {
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },
                    },
                    encoders: {
                        ctrl: {
                            color: '#FFF',
                            bgColor: '#449FEA', 
                        },
                        wave: {
                            color: '#FFF',
                            bgColor: '#449FEA', 
                        },
                        freq: {
                            color: '#FFF',
                            bgColor: '#449FEA', 
                        },
                        amp: {
                            color: '#FFF',
                            bgColor: '#449FEA', 
                        }
                    }
                },
                LFO2: {
                    color: '#FFF',
                    bgColor: '#BB1D1D',
                    main: {
                        type: 'options'
                    },
                    buttons: {
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },
                    },
                    encoders: {
                        ctrl: {
                            color: '#FFF',
                            bgColor: '#BB1D1D', 
                        },
                        wave: {
                            color: '#FFF',
                            bgColor: '#BB1D1D', 
                        },
                        freq: {
                            color: '#FFF',
                            bgColor: '#BB1D1D', 
                        },
                        amp: {
                            color: '#FFF',
                            bgColor: '#BB1D1D', 
                        }
                    }
                },
                SET: {
                    color: '#FFF',
                    bgColor: '#9BAC2C',
                    main: {
                        type: 'file',
                        func: 'generateFileInput',
                        param: 'LOAD PATTERN SET'
                    },
                    buttons: {
                        BACK: {
                            color: '#FFF',
                            bgColor: '#1D1D1D', 
                        },
                        // #########
                        functions: [
                            {
                                label: 'SAVE PATTERN SET',
                                color: '#FFF',
                                bgColor: '#9BAC2C',
                                pos: 2, 
                                main: {
                                    type: 'file',
                                    func: 'generateFileInput',
                                    param: 'SAVE PATTERN SET'
                                },
                                buttons: {
                                    BACK: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D', 
                                    }                                                        
                                },
                                encoders: {
                                    file: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D',
                                        label: 'LOAD PATTERN SET'
                                    }
                                }
                            },
                            {
                                label: 'LOAD',
                                color: '#FFF',
                                bgColor: '#64AEED',
                                pos: 4,
                                main: {
                                    type: 'file',
                                    func: 'generateFileInput',
                                    param: 'LOAD PATTERN SET'
                                },
                                buttons: { 
                                    BACK: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D', 
                                    }
                                },
                                encoders: {
                                    file: {
                                        color: '#FFF',
                                        bgColor: '#1D1D1D',
                                        label: 'LOAD PATTERN SET'
                                    }
                                }
                            }
                        ]
                        // ########
                    },
                    encoders: {}
                },
            },
            encoders: {
                length: {
                    color: '#FFF',
                    bgColor: '#F89D23',                            
                    labelVal: '',
                    colorVal: '#333',
                },
                scale: {
                    color: '#FFF',
                    bgColor: '#F89D23',
                    labelVal: '',
                    colorVal: '#333',
                },
                position: {
                    color: '#FFF',
                    bgColor: '#F89D23',
                    labelVal: '',
                    colorVal: '#333',
                },
                mode: {
                    color: '#FFF',
                    bgColor: '#F89D23',
                    labelVal: '',
                    colorVal: '#333',
                }  
            }
        }
    }
};


callMenu(menu['controller']['global']['MIDI']);


function callMenu(m) {
    clearMenu();

    // BUTTONS
    var keyNames = Object.keys(m.buttons);               
    
    // insert BUTTONS
    for(let i = 0; i < (keyNames.length); i++) {                 
        if(keyNames[i] == 'functions') {                    
            m.buttons[keyNames[i]].forEach(funcBtn => {
                fillBtn(funcBtn.pos, funcBtn.label, funcBtn);
            });                    
        } else {                    
            fillBtn((i + 1), keyNames[i], m.buttons[keyNames[i]]);
        }  
    } 

    // MAIN
    $('#mainContent').hide();
    $('#mainOptions').hide(); 
    $('#mainFile').hide();
    $('#mainContent').hide();
    console.log(m);
    if(m.main.type == 'static') {                
        $('#mainContent').show();
        $('#mainContent').html(m.main.content);
    } 
    if(m.main.type == 'options') {               
        $('#mainOptions').show();  
    } 
    if(m.main.type == 'file') {                
        $('#mainFile').show();                
        eval(m.main.func)(m.main.param);
    } 
    if(m.main.type == 'snippet') {                
        $('#mainContent').show();  
    } 

    // ENCODERS
    if(m.encoders != 'none') {
        var keyNames = Object.keys(m.encoders);            
        for(let i = 0; i < keyNames.length; i++) {  

            if(keyNames[i-1] == 'functions') {                    
                m.encoders[keyNames[i-1]].forEach(funcBtn => {
                    fillBtn(funcBtn.pos, funcBtn.label, funcBtn);
                    fillEnc(funcBtn.pos, funcBtn.label, funcBtn);
                });                    
            } else {
                fillEnc((i + 1), keyNames[i], m.encoders[keyNames[i]]);
            } 

            // fillEnc((i + 1), keyNames[i], m.encoders[keyNames[i]]);                               
        } 
    } else {
        setColorEnc(1, {bgColor: '#000', color: '#000'});
        setColorEnc(2, {bgColor: '#000', color: '#000'});
        setColorEnc(3, {bgColor: '#000', color: '#000'});
        setColorEnc(4, {bgColor: '#000', color: '#000'});
    }           
}


function fillBtn(i, id, btn = "") {            
    $('#menuTop_btn' + i).html(id);   
    setColorBtn(i, btn);  
}


function fillEnc(i, id, enc = "") {  
    $('#menuBottom_' + i + '_label').html(id);
    $('#menuBottom_' + i + '_val').html(enc.labelVal); 
    setColorEnc(i, enc); 
}

function fillOption(i, val) { 
    $('#mainOption' + i).html(val);
}

function setColorBtn(i, color = "") {                                    
    $('#menuTop_btn' + i).css("background-color", color.bgColor);
    $('#menuTop_btn' + i).css("color", color.color); 
}

function setColorEnc(i, color = "") {                         
    $('#encBottom' + i).css("background-color", color.bgColor);
    $('#menuBottom_' + i + '_label').css("color", color.color);
    $('#menuBottom_' + i + '_val').css("color", color.colorVal); 
}

function clearMenu() {
    for(i=1; i<=4; i++) {
        $('#menuTop_btn' + i).html('');
        $('#menuBottom_' + i + '_label').html('');
        $('#menuBottom_' + i + '_val').html('');  
        setColorBtn(i, { color: '#FFF', bgColor: '#333' });  
        setColorEnc(i, { color: '#FFF', bgColor: '#333' });            
    }   

    $('#mainContent').html(''); 
    $('#mainOption1').html('');
    $('#mainOption2').html(''); 
    $('#mainOption3').html('');          
    $('#mainOption4').html(''); 
}


function generateFileInput(el) {
    console.log(el);
    $('#fileLabel').html(el)
}