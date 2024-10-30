// const Mic = require('mic');
// const { FFT } = require('fft-js');
// const prompts = require('@inquirer/prompts');
import inquirer from "inquirer";

// Define standard guitar tuning frequencies (standard E tuning)
const tunings = {
    Standard: {
        E2: 82.41,
        A2: 110.00,
        D3: 146.83,
        G3: 196.00,
        B3: 246.94,
        E4: 329.63,
    },
    DropD: {
        D2: 73.42,
        A2: 110.00,
        D3: 146.83,
        G3: 196.00,
        B3: 246.94,
        e4: 329.63,
    },
    OpenG: {
        D2: 73.42,
        G2: 98.00,
        D3: 146.83,
        G3: 196.00,
        B3: 246.94,
        D4: 293.66,
    },
    OpenD: {
        D2: 73.42,
        A2: 110.00,
        D3: 146.83,
        FSharp3: 185.00,
        A3: 220.00,
        D4: 293.66,
    },
    DADGAD: {
        D2: 73.42,
        A2: 110.00,
        D3: 146.83,
        G3: 196.00,
        A3: 220.00,
        D4: 293.66,
    },
    OpenC: {
        C2: 65.41,
        G2: 98.00,
        C3: 130.81,
        G3: 196.00,
        C4: 261.63,
        E4: 329.63,
    },
    HalfStepDown: {
        Eb2: 77.78,
        Ab2: 103.83,
        Db3: 146.83,
        Gb3: 196.00,
        Bb3: 233.08,
        eb4: 311.13,
    },
    OpenE: {
        E2: 82.41,
        B2: 123.47,
        E3: 164.81,
        GSharp3: 207.65,
        B3: 246.94,
        E4: 329.63,
    },
    C6: {
        C2: 65.41,
        E2: 82.41,
        G2: 98.00,
        A2: 110.00,
        C3: 130.81,
        E3: 164.81,
    },
    Baritone: {
        B1: 61.74,
        E2: 82.41,
        A2: 110.00,
        D3: 146.83,
        FSharp3: 185.00,
        B3: 246.94,
    },
};

const questions = [
    {
        type:'list',
        name:'tuning',
        message:'Please select the tuning',
        choices:['Standard', 'OpenD', 'OpenG'],
        default:"Standard"
    }
]
function ask() {
    inquirer.prompt(questions).then(answer =>{
        console.log(answer.tuning)
        console.dir(answer, {colors:true})
    })
}
ask()
// let selectedTuning = null;

// async function selectTuning() {
//     const { tuning } = await prompts({
//         type: 'select',
//         name: 'tuning',
//         message: 'Select a tuning type:',
//         choices: Object.keys(tunings),
//     });
//     selectedTuning = tunings[tuning];
//     console.log(`Selected tuning: ${tuning}`);
//     promptForString();
// }

// async function promptForString() {
//     const { string } = await prompts({
//         type: 'select',
//         name: 'string',
//         message: 'Select a string to tune:',
//         choices: Object.keys(selectedTuning).map(note => ({
//             title: note,
//             value: note,
//         })),
//     });

//     console.log(`Tuning ${string}...`);
//     startMic(string);
// }

// function startMic(note) {
//     const mic = Mic({
//         rate: '44100',
//         channels: '1',
//         debug: false,
//         exitOnSilence: 6,
//     });

//     const micInputStream = mic.getAudioStream();
//     micInputStream.on('data', (data) => {
//         analyzeAudio(data, note);
//     });

//     mic.start();
//     console.log('Listening for guitar input...');
// }

// function analyzeAudio(data, note) {
//     const audioBuffer = new Float32Array(data.length / 2); // Convert Buffer to Float32Array
//     for (let i = 0; i < data.length; i += 2) {
//         audioBuffer[i / 2] = (data.readInt16LE(i) / 32768); // Normalize audio data
//     }

//     const fft = FFT(audioBuffer.length);
//     const frequencyData = fft.forward(audioBuffer);
    
//     // Calculate magnitudes
//     const magnitudes = frequencyData.map((val) => Math.sqrt(val[0] * val[0] + val[1] * val[1]));
//     const maxMagnitudeIndex = magnitudes.indexOf(Math.max(...magnitudes));
//     const samplingRate = 44100;
//     const dominantFrequency = (maxMagnitudeIndex * samplingRate) / audioBuffer.length;
    
//     const targetFrequency = selectedTuning[note];

//     // Clear the terminal and display results
//     console.clear();
//     console.log(`Detected frequency: ${dominantFrequency.toFixed(2)} Hz`);
//     console.log(`Target note: ${note} at ${targetFrequency.toFixed(2)} Hz`);

//     if (Math.abs(dominantFrequency - targetFrequency) < 1) {
//         console.log('Your guitar is in tune!');
//     } else {
//         const direction = dominantFrequency > targetFrequency ? 'sharp' : 'flat';
//         console.log(`Your guitar is ${direction}.`);
//     }
// }

// async function main() {
//     await selectTuning();
// }

// main().catch(err => console.error(err));
