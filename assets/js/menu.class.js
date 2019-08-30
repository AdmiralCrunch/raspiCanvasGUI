class Menu {              

    constructor(options) { 
        this._width = 800;
        this._height = 480;

        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
      
        this.mPos = [0,0,0,0,0,0,0,0,0,0];

        this.sc_balken = [
          { x: 370, width: 60, height:0, max:200, colorStart: '#DDC03C', colorStop: '#D3B322', teiler: 20 },
          { x: 308, width: 60, height:0, max:140, colorStart: '#C47125', colorStop: '#C47125', teiler: 20 },
          { x: 432, width: 60, height:0, max:75, colorStart: '#AABC2C', colorStop: '#9BAC2C', teiler: 20 },
          { x: 246, width: 60, height:0, max:100, colorStart: '#BB1D1D', colorStop: '#BB1D1D', teiler: 20 },
          { x: 494, width: 60, height:0, max:60, colorStart: '#64AEED', colorStop: '#249CD7', teiler: 20 }
        ];

        this.animate_txt = [
            {txt: 'mkA', x: 400, y: 160, color: '#CCC', a: 0}
        ];

        //this.animateSplashscreen(this);    
        this.moveShit2(0,0);
    }

    // initialisez new screen
    initScene() {
        //cleear
        this.ctx.clearRect(0,0, 800, 480);
        // BG
        var grdBg = this.ctx.createLinearGradient(0, 420, 0, 0);
        grdBg.addColorStop(0, "#1D1D1D");
        grdBg.addColorStop(1, "#1D1D1D");
        this.ctx.fillStyle = grdBg;
        this.ctx.fillRect(0, 0, this._width, this._height);        
    }
    
    // animate SplashScreen 
    animateSplashscreen() {    

        this.initScene();   

        var i = 0;
        var status = true;

        this.sc_balken.forEach((balken) => {            
            
            this.ctx.font="80px Days";
            this.ctx.textAlign="center"; 
            this.ctx.textBaseline = "middle";
            this.ctx.fillStyle = 'rgba(204,204,204,'+this.animate_txt[0].a+')';
            this.ctx.alpha = this.animate_txt[0].a;
            this.ctx.fillText(this.animate_txt[0].txt, this.animate_txt[0].x, this.animate_txt[0].y);
            this.animate_txt[0].a += 0.001;

            var grdBg = this.ctx.createLinearGradient(0, 220, 0, 320);
            grdBg.addColorStop(0, balken.colorStart);
            grdBg.addColorStop(1, balken.colorStop);
            this.ctx.fillStyle = grdBg;
            

            this.ctx.fillRect(balken.x, 210, balken.width, balken.height);

            if(balken.height >= balken.max) {
                //
            } else {  
                this.sc_balken[i].height += 2;
                status = false;
            }

            i++; 
        });

        if(status === false) {
            requestAnimationFrame(()=>this.animateSplashscreen());  
        } else {
            this.buildSplashscreen('loading');
            cancelAnimationFrame(this.animateSplashscreen); 
            this.createControllerGUI(menuDef.ctrl.main);           
            
        }         
    }

    // Builds SplashScreen and displays status-msg 
    buildSplashscreen(msg) {

        this.initScene();        

        this.sc_balken.forEach((balken) => { 
            var grdBg = this.ctx.createLinearGradient(0, 220, 0, 320);
            grdBg.addColorStop(0, balken.colorStart);
            grdBg.addColorStop(1, balken.colorStop);
            this.ctx.fillStyle = grdBg;
            this.ctx.Alpha = 0.2;
            this.ctx.fillRect(balken.x, 210, balken.width, balken.height);            
        });

        this.ctx.font="80px Days";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        this.ctx.fillText('mkA', 400, 160);     

        this.ctx.font="13px Days";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = '#FFF';
        this.ctx.fillText(msg, 400, 198);        
    }

   

    createControllerGUI(options) {
        this.initScene();

        // create track
        this.startHeight = 475; 
        this.spacer = 67;   
        /*
        for(var i = 0; i <= 3; i++) {
           // this.buildEnc(30+i*this.spacer, this.startHeight-445, 20, options.tracks[i].state, options.tracks[i].fx, options.tracks[i].lock_fx);
           // this.buildButton(30+i*this.spacer, this.startHeight-410, options.tracks[i].state, options.tracks[i].fxBtn);
          //  this.buildPoti(30+i*this.spacer, this.startHeight-355, 20, options.tracks[i].state, options.tracks[i].eqHigh, options.tracks[i].lock_eqHigh);
          //  this.buildPoti(30+i*this.spacer, this.startHeight-305, 20, options.tracks[i].state, options.tracks[i].eqMid, options.tracks[i].lock_eqMid);
          //  this.buildPoti(30+i*this.spacer, this.startHeight-255, 20, options.tracks[i].state, options.tracks[i].eqLow, options.tracks[i].lock_eqLow);
          //  this.buildButton(30+i*this.spacer, this.startHeight-220, options.tracks[i].state, options.tracks[i].trackBtn);
         //   this.buildPoti(30+i*this.spacer, this.startHeight-165, 20, options.tracks[i].state, options.tracks[i].filter, options.tracks[i].lock_filter);
         //   this.buildFader(30+i*this.spacer, this.startHeight-130, options.tracks[i].state, options.tracks[i].vol, options.tracks[i].lock_vol); 
            
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#444';
            this.ctx.moveTo(62+i*this.spacer, 10);            
            this.ctx.lineTo(62+i*this.spacer, 470);    
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#000';
            this.ctx.moveTo(64+i*this.spacer, 10);            
            this.ctx.lineTo(64+i*this.spacer, 470);    
            this.ctx.stroke();
         
        }

        
        this.ctx.beginPath();
        this.ctx.fillStyle = '#111';
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "#333";
        this.ctx.strokeRect(286, 50, 220, 120);
        this.ctx.fillRect(286, 50, 220, 120);
        this.ctx.font="20px Days";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = '#666';      
        this.ctx.fillText('SCENE', 400, 80);
        this.ctx.font="40px Days";
        this.ctx.fillStyle = '#FFF';  
        this.ctx.fillText('A', 400, 120);
        this.ctx.font="9px Days";
        this.ctx.fillStyle = '#666';  
        this.ctx.fillText('Mode: pickUp', 400, 150);

        this.ctx.fillStyle = '#111';
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "#333";
        this.ctx.strokeRect(286, 200, 220, 150);
        this.ctx.fillRect(286, 200, 220, 150);
        this.ctx.font="14px Days";
        this.ctx.fillStyle = '#FFF'; 
        this.ctx.fillText('Track 1', 400, 220);
        this.ctx.fillText('eqLow locked @ 100', 400, 240);
        this.buildEnc(400, 300, 40, 'active', 300);
        this.ctx.font="24px Days";
        this.ctx.fillStyle = '#FFF';  
        this.ctx.fillText('154', 400, 303);  
        */
        
        for(var i = 4; i <= 7; i++) { 

            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#000';
            this.ctx.moveTo(261+i*this.spacer, 10);            
            this.ctx.lineTo(261+i*this.spacer, 470);    
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#444';
            this.ctx.moveTo(263+i*this.spacer, 10);            
            this.ctx.lineTo(263+i*this.spacer, 470);    
            this.ctx.stroke();
            
            //this.buildEnc(295+i*this.spacer, this.startHeight-445, 20, options.tracks[i].state, options.tracks[i].fx, options.tracks[i].lock_fx);
            //this.buildButton(295+i*this.spacer, this.startHeight-410, options.tracks[i].state, options.tracks[i].fxBtn);
            this.buildPoti(295+i*this.spacer, this.startHeight-355, 20, options.tracks[i].state, options.tracks[i].eqHigh, options.tracks[i].lock_eqHigh);
            this.buildPoti(295+i*this.spacer, this.startHeight-305, 20, options.tracks[i].state, options.tracks[i].eqMid, options.tracks[i].lock_eqMid);
            
            this.buildPoti(295+i*this.spacer, this.startHeight-255, 20, options.tracks[i].state, options.tracks[i].eqLow, options.tracks[i].lock_eqLow);
            //this.buildButton(295+i*this.spacer, this.startHeight-220, options.tracks[i].state, options.tracks[i].trackBtn);
            this.buildPoti(295+i*this.spacer, this.startHeight-165, 20, options.tracks[i].state, options.tracks[i].filter, options.tracks[i].lock_filter);
            this.buildFader(295+i*this.spacer, this.startHeight-130, options.tracks[i].state, options.tracks[i].vol, options.tracks[i].lock_vol);             
        }
    }

    buildFader(x, y, status, value, lock) {        
        
        if(status == 'active') {
            if(lock === true) {
                this.ctx.fillStyle = '#FFF';
                this.ctx.strokeStyle = '#FF0000';
            } else {
                this.ctx.fillStyle = '#FFF';
                this.ctx.strokeStyle = '#666';
            }
            
        } else {
            this.ctx.fillStyle = '#666';
            this.ctx.strokeStyle = '#666';
        }

        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(x-23, y-3, 46, 120);
        this.ctx.fillRect(x-20, y-12+(127 - (116 / 127 * value)), 40, (116 / 127 * value));
    }

    buildButton(x, y, status, value) {
        if(status == 'active') {            
            if(value == 'on') {
                this.ctx.fillStyle = '#FFF';
            } else {
                this.ctx.fillStyle = '#666';
            }
        } else {
            this.ctx.fillStyle = '#666';
        }
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(x-23, y-3, 46, 26);
        this.ctx.fillRect(x-20, y, 40, 20);
    }

    degToRad(angle) {
        // Degrees to radians
        return ((angle * Math.PI) / 180);
    }

    createLine(fromX, fromY, toX, toY, fillStyle, lineWidth, alpha) {
        // Create a line object using Javascript object notation
        return {
            from: {
                X: fromX,
                Y: fromY
            },
            to:    {
                X: toX,
                Y: toY
            },
            fillStyle: fillStyle,
            lineWidth: lineWidth,
            alpha: alpha
        };
    } 
    
    drawLine(options, line) {
        // Draw a line using the line object passed in
        options.ctx.beginPath();
    
        // Set attributes of open
        options.ctx.globalAlpha = line.alpha;
        options.ctx.lineWidth = line.lineWidth;
        options.ctx.fillStyle = line.fillStyle;
        options.ctx.strokeStyle = line.fillStyle;
        options.ctx.moveTo(line.from.X,
            line.from.Y);
    
        // Plot the line
        options.ctx.lineTo(
            line.to.X,
            line.to.Y
        );
    
        options.ctx.stroke();
    }    

    buildOptionsAsJSON(x, y, r, ro) {
        /* Setting for the speedometer 
        * Alter these to modify its look and feel
        */
    
        var centerX = x,
            centerY = y,
            radius = r,
            outerRadius = ro;
    
        // Create a speedometer object using Javascript object notation
        return {
            ctx: this.ctx,
            speed: 10,
            center:	{
                X: centerX,
                Y: centerY
            },
            levelRadius: radius - 7,
            gaugeOptions: {
                center:	{
                    X: centerX,
                    Y: centerY
                },
                radius: radius
            },
            radius: outerRadius
        };
    }

    buildPoti(x, y, r, status, value, lock) {
        
       if(lock === true) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#fff';
        this.ctx.stroke();
       } else {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '#444';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#999';
        this.ctx.stroke();
       } 
        
        var options = this.buildOptionsAsJSON(x, y, r, 30);      

        var tickvalue = r - 18;
        var iTick = 0;
        var gaugeOptions = options.gaugeOptions;
        var iTickRad = 0;    
        var innerTickY;
        var innerTickX;
        var onArchX;
        var onArchY;    
        var fromX;
        var fromY;    
        var toX;
        var toY;
        var line;   
    
        tickvalue = options.levelRadius - 0;
        

        this.helper = 230 / 100 * value - 40;

        // 10 units (major ticks)
        for (iTick = -40; iTick < 230; iTick += 12) {
            iTickRad = this.degToRad(iTick);
    
            /* Calculate the X and Y of both ends of the
            * line I need to draw at angle represented at Tick.
            * The aim is to draw the a line starting on the
            * coloured arc and continueing towards the outer edge
            * in the direction from the center of the gauge.
            */
    
            onArchX = gaugeOptions.radius - (Math.cos(iTickRad) * tickvalue);
            onArchY = gaugeOptions.radius - (Math.sin(iTickRad) * tickvalue);
            innerTickX = gaugeOptions.radius - (Math.cos(iTickRad) * gaugeOptions.radius);
            innerTickY = gaugeOptions.radius - (Math.sin(iTickRad) * gaugeOptions.radius);
    
            fromX = (options.center.X - gaugeOptions.radius) + onArchX;
            fromY = (gaugeOptions.center.Y - gaugeOptions.radius) + onArchY;
    
            toX = (options.center.X - gaugeOptions.radius) + innerTickX;
            toY = (gaugeOptions.center.Y - gaugeOptions.radius) + innerTickY;
           
            if(status == 'active') {
              
                if(iTick <= this.helper) {
                    var color = '#FFF';
                    var thickness = 2;
                } else {
                    var color = '#999';
                    var thickness = 1;
                }
            } else {
                if(iTick <= this.helper) {
                    var color = '#999';
                    var thickness = 2;
                } else {
                    var color = '#666';
                    var thickness = 1;
                }
            }
            

            // Create a line expressed in JSON
            line = this.createLine(fromX, fromY, toX, toY, color, thickness, 1);
    
            // Draw the line
            this.drawLine(options, line);
        }
       

    }


    buildEnc(x, y, r, status, value, lock) {
        
        if(lock === true) {
            this.ctx.beginPath();
            this.ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = '#FF0000';
            this.ctx.fill();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#fff';
            this.ctx.stroke();
           } else {
            this.ctx.beginPath();
            this.ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = '#444';
            this.ctx.fill();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#999';
            this.ctx.stroke();
           }  
        
        var options = this.buildOptionsAsJSON(x, y, r, 25);      

        var tickvalue = r - 18;
        var iTick = 0;
        var gaugeOptions = options.gaugeOptions;
        var iTickRad = 0;    
        var innerTickY;
        var innerTickX;
        var onArchX;
        var onArchY;    
        var fromX;
        var fromY;    
        var toX;
        var toY;
        var line;   
    
        tickvalue = options.levelRadius - 0;

        this.helper = 360 / 100 * value - 40;
        
        // 10 units (major ticks)
        for (iTick = -30; iTick < 360; iTick += 10) {
            iTickRad = this.degToRad(iTick);
    
            /* Calculate the X and Y of both ends of the
            * line I need to draw at angle represented at Tick.
            * The aim is to draw the a line starting on the
            * coloured arc and continueing towards the outer edge
            * in the direction from the center of the gauge.
            */
    
            onArchX = gaugeOptions.radius - (Math.cos(iTickRad) * tickvalue);
            onArchY = gaugeOptions.radius - (Math.sin(iTickRad) * tickvalue);
            innerTickX = gaugeOptions.radius - (Math.cos(iTickRad) * gaugeOptions.radius);
            innerTickY = gaugeOptions.radius - (Math.sin(iTickRad) * gaugeOptions.radius);
    
            fromX = (options.center.X - gaugeOptions.radius) + onArchX;
            fromY = (gaugeOptions.center.Y - gaugeOptions.radius) + onArchY;
    
            toX = (options.center.X - gaugeOptions.radius) + innerTickX;
            toY = (gaugeOptions.center.Y - gaugeOptions.radius) + innerTickY;
           
            if(status == 'active') {
               
                if(iTick <= this.helper) {
                    var color = '#FFF';
                    var thickness = 2;
                } else {
                    var color = '#999';
                    var thickness = 1;
                }
            } else {
                if(iTick <= this.helper) {
                    var color = '#999';
                    var thickness = 2;
                } else {
                    var color = '#666';
                    var thickness = 1;
                }
            }
            

            // Create a line expressed in JSON
            line = this.createLine(fromX, fromY, toX, toY, color, thickness, 1);
    
            // Draw the line
            this.drawLine(options, line);
        }
       

    }


    
    // Builds whole menu 
    buildMenu(options) {

        this.ctx.clearRect(0, 0, this._width, this._height);

        // buttons
        this._btnBgColor = options.btnBgColor;
        this._btnBgColor2 = options.btnBgColor2;
        this._btnTxtColor = options.btnTxtColor;

        for(var i = 0; i < options.buttons.length; i++) {
            var opt = {
                x: i*201,
                y: 0,
                width: 198,
                height: 50,
                val: options.buttons[i].text
            };
            this.drawMenuBtn(opt);
        }


        // main       
        switch(options.main.type) {
            case 'ani': 
                this['entry_'+options.main.id]();               
            break;

            case 'tbl':
                this.buildTblBorders();      
                var cellCounter = 1;          
                options.main.tblCell.forEach((cell) => {                    
                    switch(cell.type) {
                        case 'txt':
                            this.ctx.font="40px Days";
                            this.ctx.textAlign="center"; 
                            this.ctx.textBaseline = "middle";
                            this.ctx.fillStyle = '#FFF';
                            this.ctx.fillText(cell.val, cellCounter*199-95, 210);
                        break;
                        case 'wave':
                            this.drawWaveForm(cellCounter, cell.val);
                        break;
                    }

                    cellCounter++;
                });

               
                for(var i = 0; i < options.main.tblCell.lenght; i++) {
                    alert(options.main[i].type);
                    switch(options.main[i].type) {
                        case 'txt':
                            alert(options.main[i].val);
                            this.ctx.font="40px Days";
                            this.ctx.textAlign="center"; 
                            this.ctx.textBaseline = "middle";
                            this.ctx.fillStyle = '#FFF';
                            this.ctx.fillText(options.main[i].val, i*199, 100);
                        break;
                    }
                }
            break;
        }
     

        // encoders
        this._encBgColor = options.encBgColor;
        this._encBgColor2 = options.encBgColor2;
        this._encTxtColor = options.encTxtColor;
        this._encValColor = options.encValColor;
        
        for(var i = 0; i < options.encoders.length; i++) {
            var opt = {
                x: i*201,
                y: 410,
                width: 198,
                height: 70,
                val: options.encoders[i].text
            };
            this.drawMenuEnc(opt);
        }     

    }


    entry_controller_global() {
        this.ctx.strokeStyle = "#333";
        this.ctx.moveTo(0,200);
        this.ctx.lineTo(480, 200);
        this.ctx.stroke();
        console.log('entry_controller_global');
        var elem = document.getElementById("myCanvas");   
        var pos = 0;
        var id = setInterval(frame, 15);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++;             
            elem.style.left = pos + 'px'; 
          }
        }
    }


    myMove() {
        var elem = document.getElementById("myCanvas");   
        var pos = 0;
        var id = setInterval(frame, 15);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++;             
            elem.style.left = pos + 'px'; 
          }
        }
      }

    drawWaveForm(i, type) {
        switch(type) {
            case 'sine':
                var counter = 0, x = 0, y = 180;                	
                var increase = 90/180*Math.PI / 9;
                for(var s = 0; s <= 120; s += 3.3) {                
                    this.ctx.moveTo(i*199-150+x,50+y);
                    x = s;
                    y =  180 - Math.sin(counter) * 75;
                    counter += increase;     
                    this.ctx.lineTo(i*199-150+x, 50+y);
                    this.ctx.stroke();  
                }
            break;
            case 'square':
                this.ctx.setLineDash([1, 0]);
                this.ctx.beginPath();
                this.ctx.strokeStyle = "#FFF";
                this.ctx.lineWidth = 5;                
                this.ctx.moveTo(i*199-40,160);
                this.ctx.lineTo(i*199-40, 300);
                this.ctx.stroke();
                this.ctx.moveTo(i*199-140,160);
                this.ctx.lineTo(i*199-140, 300);
                this.ctx.stroke();
                this.ctx.moveTo(i*199-40,160);
                this.ctx.lineTo(i*199-140, 160);
                this.ctx.stroke();


            break;
            case 'saw':
                this.ctx.setLineDash([1, 0]);
                this.ctx.beginPath();
                this.ctx.strokeStyle = "#FFF";
                this.ctx.lineWidth = 5;
                this.ctx.moveTo(i*199-40,160);
                this.ctx.lineTo(i*199-160, 300);
                this.ctx.stroke();
                this.ctx.moveTo(i*199-40,160);
                this.ctx.lineTo(i*199-40, 300);
                this.ctx.stroke();
            break;
           
        }
    }


    buildTblBorders() {        
        this.ctx.setLineDash([2, 5]); // dashes are 2px and spaces are 5px 
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#333";
        this.ctx.moveTo(199,65);
        this.ctx.lineTo(199, 400);
        this.ctx.stroke();
        this.ctx.strokeStyle = "#333";
        this.ctx.moveTo(402,65);
        this.ctx.lineTo(402, 400);
        this.ctx.stroke();
        this.ctx.strokeStyle = "#FFF";
        this.ctx.moveTo(603,65);
        this.ctx.lineTo(603, 400);
        this.ctx.stroke();       
    }

    drawMenuBtn(options) {
        var grdBtn = this.ctx.createLinearGradient(0, 50, 0, 0);
        grdBtn.addColorStop(0, this._btnBgColor);
        grdBtn.addColorStop(1, this._btnBgColor2);
        this.ctx.fillStyle = grdBtn;
        this.ctx.fillRect(options.x, options.y, options.width, options.height);

        this.ctx.font="30px Days";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = this._btnTxtColor;
        this.ctx.fillText(options.val,options.x+(options.width/2),options.y+(options.height/2));
    }
    
    drawMenuEnc(options) {
       
        var grdEnc = this.ctx.createLinearGradient(0, 480, 0, 400);
        grdEnc.addColorStop(0, this._encBgColor);
        grdEnc.addColorStop(1, this._encBgColor2);
        this.ctx.fillStyle = grdEnc;
        this.ctx.fillRect(options.x, options.y, options.width, options.height);

        this.ctx.font="14px Days";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = this._encTxtColor;
        this.ctx.fillText(options.text,options.x+(options.width/2),options.y+(options.height/3));

        this.ctx.font="20px Days";
        this.ctx.textAlign="center"; 
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = this._encValColor;
        this.ctx.fillText(options.val,options.x+(options.width/2),options.y+(options.height/2)+12);
    }
}