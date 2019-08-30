/* GENERATE PIANOROLL */
var pianoRollRangeMin = -2;
var pianoRollRangeMax = 8;
var pianoRollOctaveNotes = [
    ['C', 'full'],
    ['C#', 'half'],
    ['D', 'full'],
    ['D#', 'half'],
    ['E', 'full'],
    ['F', 'full'],
    ['F#', 'half'],
    ['G', 'full'],
    ['G#', 'half'],
    ['A', 'full'],
    ['A#', 'half'],
    ['B', 'full'],
];    

var prActNote = 0; // C
var prActRange = 0 // 0

var prPos = 0;

var BreakException = {};

generatePR();

function generatePR() {

    var i = 0;                    
    var element = document.getElementById("pianoRollWrapper");

    var labelWidth = 49
    var noteWidth = (screen.width - labelWidth) / 16;
                       
    for(t=0; t<=1; t++) {
        try {
            pianoRollOctaveNotes.forEach(function(note) {
                if (i === 16)  { throw BreakException; }                                                                            
                
                var rowLAbel = document.createTextNode(note[0] + prActRange);
                var rowWrapper = document.createElement("div");
                rowWrapper.className = 'prRowWrapper';                                

                for(x=0; x<=16; x++) {
                    if(x === 0) {
                        var helpBit = document.createElement("div");
                        helpBit.appendChild(rowLAbel);
                        helpBit.className = 'prRowBitLabel_' + note[1];
                        helpBit.id = 'prRowBitLabel_' + note[1];
                    } else {
                        var helpBit = document.createElement("div");
                        helpBit.className = 'prRowBit ' + note[1];
                        helpBit.style.width = noteWidth + "px";
                        helpBit.id = 'prRowBit_' + x;
                    }                                       
                    rowWrapper.appendChild(helpBit);                             
                }  
                element.appendChild(rowWrapper);                                 
                i++;
            });                        
        } catch (e) {
            if (e !== BreakException) throw e;
        }
    }   

    var p = 0;

    /* SEQ POSITION */
    var colWrapperOuter = document.createElement("div");
    colWrapperOuter.className = 'prPosWrapperOuter'; 
    var colWrapper = document.createElement("div");
    colWrapper.className = 'prPosWrapper'; 
    colWrapper.id = 'prPosWrapper'; 

    for(t=0; t<=1; t++) {
        try {
            pianoRollOctaveNotes.forEach(function(note) {
                if (p === 16)  { throw BreakException; }   
                
                var helpBit = document.createElement("div");
                helpBit.className = 'prPosBit pos_' + note[1];
                helpBit.style.width = noteWidth + "px";
                helpBit.id = 'prPosBit_' + x;
                                                          
                colWrapper.appendChild(helpBit);  
                                                 
                p++;
            });                        
        } catch (e) {
            if (e !== BreakException) throw e;
        }
    }   
    colWrapperOuter.appendChild(colWrapper);
    element.appendChild(colWrapperOuter);

    
    seq_play(noteWidth);
}                


var playing;

function seq_play(noteWidth) {
    console.log('noteWidth:' + noteWidth);  
    playing = setInterval(function(){ 
            movePrPos(noteWidth); 
            prPos++;  
        }, 250);               
}

function movePrPos(noteWidth) {                                         
    var prPosWrapper = document.getElementById('prPosWrapper'),
        style = window.getComputedStyle(prPosWrapper),
        left = parseInt(style.getPropertyValue('left'));                       
    if(prPos <= 15) {
        document.getElementById("prPosWrapper").style.left = left + noteWidth + 0.4+'px';
    }  else {
        document.getElementById("prPosWrapper").style.left = 'initial';
        prPos = 0;
    }
    
}