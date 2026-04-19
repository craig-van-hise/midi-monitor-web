import React from 'react';

/**
 * MIDI Keyboard Component
 * A 128-key MIDI keyboard visualizer.
 * Supports C3, C4, and C5 middle C designations.
 * 
 * Designed for high performance: updates are done via DOM manipulation
 * through the exported updateKeyVisuals function to handle high-frequency MIDI events.
 */

interface MIDIKeyboardProps {
  middleC?: 'C3' | 'C4' | 'C5';
  className?: string;
  style?: React.CSSProperties;
}

export const CHANNEL_COLORS = [
  '#FF0000', // Ch 1: Red
  '#FF6000', // Ch 2: Orange-Red
  '#FFBF00', // Ch 3: Amber/Gold
  '#DFFF00', // Ch 4: Lime-Yellow
  '#80FF00', // Ch 5: Chartreuse
  '#20FF00', // Ch 6: Bright Green
  '#00FF40', // Ch 7: Spring Green
  '#00FF9F', // Ch 8: Seafoam
  '#00FFFF', // Ch 9: Cyan
  '#009FFF', // Ch 10: Sky Blue
  '#0040FF', // Ch 11: Royal Blue
  '#2000FF', // Ch 12: Indigo
  '#8000FF', // Ch 13: Purple
  '#DF00FF', // Ch 14: Magenta
  '#FF00BF', // Ch 15: Deep Pink
  '#FF0060'  // Ch 16: Crimson/Rose
];

export const MIDIKeyboard: React.FC<MIDIKeyboardProps> = ({ 
  middleC = 'C4', 
  className = '', 
  style = {} 
}) => {
  const keyboardOctaveOffset = middleC === 'C3' ? -2 : middleC === 'C5' ? 0 : -1;
  const pianoKeys = [];

  for (let note = 0; note < 128; note++) {
    const noteInOctave = note % 12;
    const isBlack = [1, 3, 6, 8, 10].includes(noteInOctave);
    
    if (!isBlack) {
      const hasRightBlack = [0, 2, 5, 7, 9].includes(noteInOctave) && (note + 1 < 128);
      const isC = noteInOctave === 0;
      const octave = Math.floor(note / 12) + keyboardOctaveOffset;
      
      pianoKeys.push(
        <div 
          key={`w-${note}`} 
          id={`piano-key-${note}`}
          style={{
            flex: '1 1 0%',
            height: '100%',
            borderRight: '1px solid #1a1a1a',
            backgroundColor: '#fdfdfd',
            position: 'relative',
            minWidth: '5px',
            transition: 'background-color 75ms ease-out, box-shadow 75ms ease-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          {hasRightBlack && (
            <div 
               id={`piano-key-${note + 1}`}
               style={{
                 position: 'absolute',
                 zIndex: 10,
                 backgroundColor: '#1a1a1a',
                 width: '65%',
                 maxWidth: '12px',
                 height: '64%',
                 top: 0,
                 right: 0,
                 transform: 'translateX(50%)',
                 transition: 'background-color 75ms ease-out, box-shadow 75ms ease-out',
                 borderRadius: '0 0 1px 1px'
               }}
            />
          )}
          {isC && (
            <span style={{
              fontSize: '8px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#666',
              marginBottom: '4px',
              pointerEvents: 'none',
              userSelect: 'none'
            }}>
              C{octave}
            </span>
          )}
        </div>
      );
    }
  }

  return (
    <div 
      className={`midi-keyboard ${className}`}
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        padding: '0 4px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        ...style
      }}
    >
      {pianoKeys}
    </div>
  );
};

/**
 * Updates a specific key's visual state.
 * @param note The MIDI note number (0-127)
 * @param color The color to apply (CSS color string). Pass an empty string to reset.
 */
export const updateKeyVisuals = (note: number, color: string) => {
  const el = document.getElementById(`piano-key-${note}`);
  if (el) {
    const isBlack = [1, 3, 6, 8, 10].includes(note % 12);
    if (color) {
      el.style.backgroundColor = color;
      el.style.boxShadow = `0 0 15px ${color}`;
      if (isBlack) {
        el.style.border = '1px solid #1a1a1a';
        el.style.zIndex = '11';
      }
    } else {
      el.style.backgroundColor = '';
      el.style.boxShadow = '';
      if (isBlack) {
        el.style.border = '';
        el.style.zIndex = '';
      }
    }
  }
};
