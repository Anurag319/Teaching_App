

export const quiz = [{
    id:0,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          ' What is the nature of thrusters and feed system for attitude control rocket engines',
        choices: ['small; common pressurized feed system', 'large; separate turbopump feed system', 
        'small; separate pressurized feed system', ' large; common turbopump feed system'],
        type: 'MCQs',
        correctAnswer: 'small; common pressurized feed system',
      },
      {
        question:
          'For the application of pure torques in three directions, it requires ______ thrusters',
        choices: ['6', '3', '12', '9'],
        type: 'MCQs',
        correctAnswer: '12',
      },
      {
        question:
          'A thruster firing repeatedly for 0.010 seconds each time followed by a pause of 0.020 seconds or 0.150 seconds is an example for __________',
        choices: [
            'step input mode',
            'pulsing mode',
            'sinusoidal mode',
            'ramp input mode'
        ],
        type: 'MCQs',
        correctAnswer: 'pulsing mode',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
    ],
  },
  {
    "id": 1,
    "topic": "Rocket Science",
    "level": "Intermediate",
    "totalQuestions": 8,
    "perQuestionScore": 7,
    "totalTime": 90,
    "questions": [
      {
        "question": "What principle explains why a rocket is able to generate thrust in a vacuum?",
        "choices": [
          "Newton's First Law",
          "Law of Conservation of Energy",
          "Bernoulli's Principle",
          "Newton's Third Law"
        ],
        "type": "MCQs",
        "correctAnswer": "Newton's Third Law"
      },
      {
        "question": "Which equation is used to calculate the velocity of a rocket in space, accounting for mass and exhaust velocity?",
        "choices": [
          "Einstein's Mass-Energy Equivalence",
          "Hubble's Law",
          "Tsiolkovsky's Rocket Equation",
          "Schwarzschild's Solution"
        ],
        "type": "MCQs",
        "correctAnswer": "Tsiolkovsky's Rocket Equation"
      },
      {
        "question": "What is the term for the point in a rocket's flight when the force of gravity is equal to the thrust?",
        "choices": [
          "Liftoff",
          "Orbital Apex",
          "Escape Velocity",
          "Burnout"
        ],
        "type": "MCQs",
        "correctAnswer": "Burnout"
      },
      {
        "question": "Which phenomenon explains the curvature of rocket exhaust plumes in the upper atmosphere?",
        "choices": [
          "Coriolis Effect",
          "Doppler Shift",
          "Thermal Expansion",
          "Mach Cone"
        ],
        "type": "MCQs",
        "correctAnswer": "Mach Cone"
      }
    ]
  },
  {
    id:2,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  },
  {
    "id": 3,
    "topic": "Rocket Science",
    "level": "Intermediate",
    "totalQuestions": 8,
    "perQuestionScore": 7,
    "totalTime": 90,
    "questions": [
      // ... (previous questions)
  
      {
        "question": "What phenomenon causes the blue color often seen in the exhaust plumes of rockets?",
        "choices": [
          "Cherenkov Radiation",
          "Doppler Effect",
          "Rayleigh Scattering",
          "Compton Scattering"
        ],
        "type": "MCQs",
        "correctAnswer": "Cherenkov Radiation"
      },
      {
        "question": "Which spacecraft, launched in 1977, is currently the farthest human-made object from Earth?",
        "choices": [
          "Voyager 1",
          "Pioneer 10",
          "New Horizons",
          "Cassini-Huygens"
        ],
        "type": "MCQs",
        "correctAnswer": "Voyager 1"
      },
      {
        "question": "What is the process called when a spacecraft re-enters Earth's atmosphere and experiences intense heating due to compression of air?",
        "choices": [
          "Hypersonic Skimming",
          "Thermodynamic Shock",
          "Atmospheric Friction",
          "Aerodynamic Drag"
        ],
        "type": "MCQs",
        "correctAnswer": "Thermodynamic Shock"
      },
      {
        "question": "Which concept involves using the gravitational slingshot effect of a planet to increase a spacecraft's speed and redirect its trajectory?",
        "choices": [
          "Orbital Precession",
          "Gravitational Lensing",
          "Gravity Assist",
          "Orbital Perturbation"
        ],
        "type": "MCQs",
        "correctAnswer": "Gravity Assist"
      }
    ]
  },
  {
    "id": 4,
    "topic": "Rocket Science",
    "level": "Intermediate",
    "totalQuestions": 8,
    "perQuestionScore": 7,
    "totalTime": 90,
    "questions": [
      {
        "question": "What is the process by which a rocket changes its velocity to enter a stable orbit?",
        "choices": [
          "Tethering",
          "Docking",
          "Orbital Resonance",
          "Orbital Insertion"
        ],
        "type": "MCQs",
        "correctAnswer": "Orbital Insertion"
      },
      {
        "question": "Which type of propulsion system utilizes the ejection of ions to generate thrust?",
        "choices": [
          "Solid Rocket Motors",
          "Liquid Rocket Engines",
          "Nuclear Thermal Propulsion",
          "Ion Thrusters"
        ],
        "type": "MCQs",
        "correctAnswer": "Ion Thrusters"
      },
      {
        "question": "What is the region beyond Pluto where objects in the solar system are influenced by the gravity of the Sun and other stars?",
        "choices": [
          "Kuiper Belt",
          "Oort Cloud",
          "Asteroid Belt",
          "Heliopause"
        ],
        "type": "MCQs",
        "correctAnswer": "Oort Cloud"
      },
      {
        "question": "Which space agency achieved the first successful landing of a human-made object on Mars?",
        "choices": [
          "NASA",
          "ESA",
          "Roscosmos",
          "ISRO"
        ],
        "type": "MCQs",
        "correctAnswer": "NASA"
      }
    ]
  }
  ,
  {
    id:5,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:6,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:7,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:8,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:9,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:10,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:11,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:12,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:13,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:14,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:15,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:16,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:17,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:18,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:19,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:20,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:21,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:22,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:23,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:24,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:25,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:26,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:27,
    topic: 'Rocketry',
    level: 'Basic',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:28,
    topic: 'Rocketry',
    level: 'Medium',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
  ,
  {
    id:29,
    topic: 'Rocketry',
    level: 'Advance',
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          'Reaction control of the Space Shuttle is achieved using ________ thrusters.',
        choices: ['24','38','40','60'],
        type: 'MCQs',
        correctAnswer: '38',
      },
      {
        question:
          'What is range of side force required by a ballistic missile during its final closing maneuver just before nearing in on the target?',
        choices: ['100-4500 N', '200-6000 N', '800-8000 N', '1000-18000 N'],
        type: 'MCQs',
        correctAnswer: '200-6000 N',
      },
      {
        question:
          'What kind of propulsion is used for trajectory adjustments and attitude corrections?',
        choices: [
            'Boosting',
            'Sustaining',
            'Cryogenic',
            'Auxiliary'
        ],
        type: 'MCQs',
        correctAnswer: 'Auxiliary',
      },
      {
        question: 'For very short pulse duration of the thruster firing, the specific impulse is degraded by __________%',
        choices: ['1','3','7','4'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }
]