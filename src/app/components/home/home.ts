import { Component } from '@angular/core';
import { Affliction } from '../../interfaces/affliction';
import { PreventionTip } from '../../interfaces/prevention-tip';
import { BodyPartInfo } from '../../interfaces/body-part-info';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  selectedPart: BodyPartInfo | null = null;
  hoverPart: string | null = null;

  bodyParts = [
    { 
      id: 'brain', 
      label: 'Brain', 
      top: '16%', 
      left: '80%'      
    },
    { 
      id: 'eyes', 
      label: 'Eyes', 
      top: '28%', 
      left: '80%'
    }, 
    { 
      id: 'lungs', 
      label: 'Lungs', 
      top: '40%', 
      left: '80%'
    },  
    { 
      id: 'heart', 
      label: 'Heart', 
      top: '52%', 
      left: '80%'
    },
    { 
      id: 'stomach', 
      label: 'Stomach', 
      top: '64%', 
      left: '80%'
    },
    { 
      id: 'liver', 
      label: 'Liver', 
      top: '76%', 
      left: '80%'
    },
    { 
      id: 'kidneys', 
      label: 'Kidneys', 
      top: '88%', 
      left: '80%'
    },
  ];

  bodyPartData: { [key: string]: BodyPartInfo } = {
    brain: {
      id: 'brain',
      title: 'Brain',
      icon: '🧠',
      afflictions: [
        {
          name: 'Headaches & Migraines',
          description: 'Recurring pain that can be triggered by stress, dehydration, hormonal changes, or certain foods. Can significantly impact daily activities and quality of life.'
        },
        {
          name: 'Depression & Anxiety',
          description: 'Mental health conditions affecting mood, thoughts, and daily functioning. Can manifest as persistent sadness, worry, or changes in sleep and appetite.'
        },
        {
          name: 'Memory Issues',
          description: 'Age-related cognitive decline, difficulty concentrating, or early signs of dementia. May include forgetting names, dates, or recent conversations.'
        },
        {
          name: 'Stroke',
          description: 'Interruption of blood flow to the brain causing cell death. Can result in paralysis, speech problems, or cognitive impairment depending on the affected area.'
        }
      ],
      preventionTips: [
        {
          title: 'Regular Physical Exercise',
          description: 'Aim for 30 minutes of moderate aerobic activity most days. Exercise improves blood flow to the brain, reduces stress hormones, and promotes neuroplasticity.'
        },
        {
          title: 'Mental Stimulation',
          description: 'Engage in challenging mental activities like reading, puzzles, learning new skills, or playing strategy games to maintain cognitive function and build neural reserves.'
        },
        {
          title: 'Quality Sleep (7-9 hours)',
          description: 'Maintain consistent sleep schedule. During sleep, the brain consolidates memories and clears metabolic waste, including proteins linked to Alzheimer\'s disease.'
        },
        {
          title: 'Stress Management',
          description: 'Practice meditation, yoga, deep breathing, or mindfulness. Chronic stress increases cortisol levels, which can damage brain cells and impair memory.'
        },
        {
          title: 'Healthy Social Connections',
          description: 'Maintain meaningful relationships and social activities. Social isolation is linked to increased risk of depression, cognitive decline, and dementia.'
        }
      ]
    },
    heart: {
      id: 'heart',
      title: 'Heart',
      icon: '❤️',
      afflictions: [
        {
          name: 'High Blood Pressure (Hypertension)',
          description: 'Often called the "silent killer" because it usually has no symptoms but damages arteries and increases risk of heart attack, stroke, and kidney disease.'
        },
        {
          name: 'Coronary Heart Disease',
          description: 'Blocked or narrowed coronary arteries reduce blood flow to the heart muscle, leading to chest pain (angina), shortness of breath, or heart attacks.'
        },
        {
          name: 'High Cholesterol',
          description: 'Excess cholesterol forms plaques in arteries, narrowing them and restricting blood flow. Can lead to atherosclerosis and increased cardiovascular risk.'
        },
        {
          name: 'Heart Failure',
          description: 'The heart cannot pump blood effectively to meet the body\'s needs. Symptoms include fatigue, shortness of breath, and fluid retention.'
        }
      ],
      preventionTips: [
        {
          title: 'Heart-Healthy Diet',
          description: 'Eat plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit saturated fats, trans fats, sodium, and added sugars.'
        },
        {
          title: 'Regular Cardiovascular Exercise',
          description: 'Aim for at least 150 minutes of moderate-intensity aerobic activity weekly. Activities like brisk walking, swimming, or cycling strengthen the heart muscle.'
        },
        {
          title: 'Avoid Tobacco and Limit Alcohol',
          description: 'Smoking damages blood vessels and significantly increases heart disease risk. If you drink alcohol, do so in moderation (1 drink/day for women, 2 for men).'
        },
        {
          title: 'Maintain Healthy Weight',
          description: 'Excess weight increases the workload on your heart and raises risk of high blood pressure, diabetes, and high cholesterol.'
        },
        {
          title: 'Regular Health Screenings',
          description: 'Monitor blood pressure, cholesterol levels, blood sugar, and other cardiovascular risk factors. Early detection allows for timely intervention.'
        }
      ]
    },
    lungs: {
      id: 'lungs',
      title: 'Lungs',
      icon: '🫁',
      afflictions: [
        {
          name: 'Asthma',
          description: 'Chronic condition where airways become inflamed and narrow, causing wheezing, coughing, chest tightness, and breathing difficulties, especially during flare-ups.'
        },
        {
          name: 'Chronic Obstructive Pulmonary Disease (COPD)',
          description: 'Progressive lung disease often caused by long-term smoking. Includes emphysema and chronic bronchitis, leading to difficulty breathing and reduced quality of life.'
        },
        {
          name: 'Pneumonia',
          description: 'Infection that inflames air sacs in one or both lungs, which may fill with fluid or pus, causing cough with phlegm, fever, chills, and difficulty breathing.'
        },
        {
          name: 'Lung Cancer',
          description: 'Most often caused by smoking, but can occur in non-smokers. Early stages often have no symptoms, making regular screenings important for high-risk individuals.'
        }
      ],
      preventionTips: [
        {
          title: 'Never Smoke or Quit Smoking',
          description: 'Smoking is the leading cause of lung cancer and COPD. Quitting at any age provides immediate and long-term health benefits. Avoid secondhand smoke exposure.'
        },
        {
          title: 'Breathe Clean Air',
          description: 'Use air purifiers indoors, avoid outdoor activities when air quality is poor, and minimize exposure to dust, chemicals, and other pollutants when possible.'
        },
        {
          title: 'Practice Breathing Exercises',
          description: 'Deep breathing exercises, pursed-lip breathing, and diaphragmatic breathing can strengthen respiratory muscles and improve lung capacity.'
        },
        {
          title: 'Stay Up-to-Date with Vaccinations',
          description: 'Get annual flu vaccines and pneumonia vaccines as recommended. Respiratory infections can be particularly dangerous for people with existing lung conditions.'
        },
        {
          title: 'Regular Physical Activity',
          description: 'Aerobic exercise strengthens respiratory muscles and improves lung efficiency. Start slowly and gradually increase intensity under medical guidance if you have lung conditions.'
        }
      ]
    },
    stomach: {
      id: 'stomach',
      title: 'Stomach',
      icon: '🍽️',
      afflictions: [
        {
          name: 'Gastroesophageal Reflux Disease (GERD)',
          description: 'Chronic condition where stomach acid frequently flows back into the esophagus, causing heartburn, chest pain, and potential damage to the esophageal lining.'
        },
        {
          name: 'Peptic Ulcers',
          description: 'Open sores in the stomach lining or small intestine, often caused by H. pylori bacteria or long-term use of NSAIDs. Can cause burning stomach pain and complications.'
        },
        {
          name: 'Gastritis',
          description: 'Inflammation of the stomach lining causing nausea, vomiting, indigestion, and stomach pain. Can be acute or chronic, often related to infection, medications, or lifestyle factors.'
        },
        {
          name: 'Irritable Bowel Syndrome (IBS)',
          description: 'Functional disorder affecting the large intestine, causing abdominal pain, bloating, gas, and changes in bowel habits without structural abnormalities.'
        }
      ],
      preventionTips: [
        {
          title: 'Eat Smaller, Frequent Meals',
          description: 'Consume 4-6 smaller meals instead of 3 large ones. This reduces stomach acid production and prevents overloading the digestive system.'
        },
        {
          title: 'Avoid Trigger Foods',
          description: 'Limit spicy, acidic, fatty, or highly processed foods. Common triggers include citrus fruits, tomatoes, chocolate, caffeine, and alcohol.'
        },
        {
          title: 'Manage Stress Effectively',
          description: 'Chronic stress increases stomach acid production and can worsen digestive symptoms. Practice stress-reduction techniques like meditation or yoga.'
        },
        {
          title: 'Take Medications Properly',
          description: 'Take NSAIDs with food and follow dosage instructions. Long-term use can irritate the stomach lining. Discuss alternatives with your healthcare provider if needed.'
        },
        {
          title: 'Stay Hydrated and Maintain Good Posture',
          description: 'Drink plenty of water throughout the day and avoid lying down immediately after eating. Wait at least 2-3 hours before bedtime after your last meal.'
        }
      ]
    },
    liver: {
      id: 'liver',
      title: 'Liver',
      icon: '🟤',
      afflictions: [
        {
          name: 'Non-Alcoholic Fatty Liver Disease',
          description: 'Accumulation of fat in liver cells not caused by alcohol consumption. Often associated with obesity, diabetes, and metabolic syndrome. Can progress to serious liver damage.'
        },
        {
          name: 'Hepatitis (A, B, C)',
          description: 'Viral infections causing liver inflammation. Hepatitis B and C can become chronic and lead to long-term complications including cirrhosis and liver cancer.'
        },
        {
          name: 'Cirrhosis',
          description: 'Advanced scarring of the liver tissue, often the end result of chronic liver diseases. Can lead to liver failure and requires liver transplantation in severe cases.'
        },
        {
          name: 'Alcoholic Liver Disease',
          description: 'Damage caused by excessive alcohol consumption over time, progressing from fatty liver to hepatitis to cirrhosis if drinking continues.'
        }
      ],
      preventionTips: [
        {
          title: 'Limit Alcohol Consumption',
          description: 'Men should limit to 2 drinks per day, women to 1 drink per day. For some people with liver conditions, complete abstinence may be necessary.'
        },
        {
          title: 'Maintain a Healthy Weight',
          description: 'Obesity significantly increases the risk of fatty liver disease. Achieve and maintain a healthy BMI through balanced diet and regular exercise.'
        },
        {
          title: 'Get Vaccinated',
          description: 'Protect yourself against hepatitis A and B with vaccines. Practice safe behaviors to prevent hepatitis C, including avoiding sharing needles.'
        },
        {
          title: 'Use Medications Safely',
          description: 'Take medications only as prescribed and be aware that some can cause liver damage. Inform your doctor about all medications and supplements you take.'
        },
        {
          title: 'Eat a Liver-Friendly Diet',
          description: 'Focus on fruits, vegetables, whole grains, and lean proteins. Limit processed foods, added sugars, and saturated fats that can contribute to fatty liver.'
        }
      ]
    },
    kidneys: {
      id: 'kidneys',
      title: 'Kidneys',
      icon: '🫘',
      afflictions: [
        {
          name: 'Kidney Stones',
          description: 'Hard deposits of minerals and salts that form in the kidneys. Can cause severe pain when passing through the urinary tract, and may require medical intervention.'
        },
        {
          name: 'Chronic Kidney Disease',
          description: 'Gradual loss of kidney function over time, often related to diabetes and high blood pressure. Can progress to kidney failure requiring dialysis or transplant.'
        },
        {
          name: 'Urinary Tract Infections (UTIs)',
          description: 'Bacterial infections that can start in the bladder and spread to the kidneys if untreated, potentially causing permanent kidney damage.'
        },
        {
          name: 'Polycystic Kidney Disease',
          description: 'Genetic disorder causing fluid-filled cysts to develop in the kidneys, potentially leading to kidney enlargement and reduced function over time.'
        }
      ],
      preventionTips: [
        {
          title: 'Stay Well Hydrated',
          description: 'Drink 8-10 glasses of water daily to help kidneys filter waste effectively and prevent kidney stone formation. Increase intake during hot weather or exercise.'
        },
        {
          title: 'Control Blood Sugar Levels',
          description: 'Diabetes is a leading cause of kidney disease. Maintain healthy blood glucose levels through proper diet, exercise, and medication management if diabetic.'
        },
        {
          title: 'Monitor Blood Pressure',
          description: 'High blood pressure can damage kidney blood vessels over time. Maintain blood pressure below 120/80 mmHg through lifestyle changes and medication if needed.'
        },
        {
          title: 'Reduce Sodium and Processed Food Intake',
          description: 'Limit sodium to less than 2,300mg daily. High sodium intake increases blood pressure and forces kidneys to work harder to maintain proper fluid balance.'
        },
        {
          title: 'Avoid Overuse of Pain Medications',
          description: 'Long-term use of NSAIDs (ibuprofen, naproxen) can damage kidneys. Use as directed and discuss alternatives with your healthcare provider for chronic pain.'
        }
      ]
    },
    eyes: {
      id: 'eyes',
      title: 'Eyes',
      icon: '👀',
      afflictions: [
        {
          name: 'Dry Eye Syndrome',
          description: 'Insufficient tear production or poor tear quality causing eye irritation, burning, blurred vision, and discomfort, especially common with aging and screen use.'
        },
        {
          name: 'Cataracts',
          description: 'Clouding of the eye\'s natural lens, most commonly due to aging. Causes blurred vision, light sensitivity, and difficulty seeing at night.'
        },
        {
          name: 'Glaucoma',
          description: 'Group of eye diseases that damage the optic nerve, often due to increased eye pressure. Can cause gradual vision loss and blindness if untreated.'
        },
        {
          name: 'Age-Related Macular Degeneration',
          description: 'Deterioration of the central portion of the retina, affecting central vision needed for reading, driving, and recognizing faces.'
        }
      ],
      preventionTips: [
        {
          title: 'Schedule Regular Eye Exams',
          description: 'Get comprehensive eye exams annually, especially after age 40. Early detection of eye diseases can prevent or slow vision loss.'
        },
        {
          title: 'Protect Eyes from UV Light',
          description: 'Wear sunglasses with 100% UV protection and wide-brimmed hats when outdoors. UV exposure increases risk of cataracts and macular degeneration.'
        },
        {
          title: 'Follow the 20-20-20 Rule',
          description: 'When using digital devices, every 20 minutes look at something 20 feet away for at least 20 seconds to reduce eye strain and dry eyes.'
        },
        {
          title: 'Eat Eye-Healthy Foods',
          description: 'Include foods rich in omega-3 fatty acids, vitamins C and E, zinc, and antioxidants like lutein and zeaxanthin found in leafy greens and colorful vegetables.'
        },
        {
          title: 'Don\'t Ignore Vision Changes',
          description: 'Seek immediate medical attention for sudden vision changes, flashing lights, eye pain, or loss of peripheral vision, as these may indicate serious conditions.'
        }
      ]
    },
    head: {
      id: 'head',
      title: 'Head & Neck',
      icon: '🗣️',
      afflictions: [
        {
          name: 'Tension Headaches',
          description: 'Most common type of headache caused by muscle tension in the neck, scalp, and jaw. Often triggered by stress, poor posture, or lack of sleep.'
        },
        {
          name: 'Temporomandibular Joint (TMJ) Disorders',
          description: 'Problems with the jaw joint and muscles controlling jaw movement, causing pain, clicking sounds, and difficulty chewing or opening the mouth.'
        },
        {
          name: 'Sinusitis',
          description: 'Inflammation of the tissue lining the sinuses, causing facial pressure, nasal congestion, thick nasal discharge, and sometimes fever and dental pain.'
        },
        {
          name: 'Cervical Spine Issues',
          description: 'Problems with neck vertebrae and muscles can cause neck pain, stiffness, and headaches, often related to poor posture or injury.'
        }
      ],
      preventionTips: [
        {
          title: 'Maintain Good Posture',
          description: 'Keep your head aligned over your shoulders, especially when working at a computer. Use ergonomic furniture and take frequent breaks to stretch.'
        },
        {
          title: 'Manage Stress Effectively',
          description: 'Practice stress-reduction techniques like deep breathing, meditation, or progressive muscle relaxation to prevent tension headaches and jaw clenching.'
        },
        {
          title: 'Stay Hydrated Throughout the Day',
          description: 'Dehydration is a common headache trigger. Drink water regularly and limit caffeine and alcohol intake, which can contribute to dehydration.'
        },
        {
          title: 'Maintain Regular Sleep Schedule',
          description: 'Go to bed and wake up at consistent times. Poor sleep quality and irregular sleep patterns are major headache triggers.'
        },
        {
          title: 'Practice Jaw and Neck Exercises',
          description: 'Gentle stretching and strengthening exercises can help prevent TMJ problems and neck tension. Avoid clenching teeth and excessive gum chewing.'
        }
      ]
    }
  };

  selectBodyPart(partId: string): void {
    // Handle grouped parts (lungs, kidneys)
    const mappedPartId = partId.includes('-') ? partId.split('-')[0] : partId;
    this.selectedPart = this.bodyPartData[mappedPartId] || null;
  }

  clearSelection(): void {
    this.selectedPart = null;
  }

  getButtonClasses(organ: string): string {
    const baseClasses = `
      absolute transform -translate-x-1/2 -translate-y-1/2 
      px-2 py-1.5 md:px-3 md:py-2.5
      text-sm md:text-sm font-semibold
      rounded-full shadow-lg
      transition-all duration-300 ease-in-out
      hover:scale-110 hover:shadow-xl
      focus:outline-none focus:ring-2 focus:ring-offset-1
      border-2 border-indigo-500
      backdrop-blur-sm bg-opacity-95
    `;

    const isSelected = this.selectedPart?.id === organ;
    const stateClasses = isSelected
      ? 'bg-indigo-600 text-white ring-4 ring-indigo-300 scale-110'
      : 'bg-white text-indigo-700 hover:bg-indigo-50';

    return `${baseClasses} ${stateClasses}`;
  }

  getBodyPartPosition(partId: string): { [key: string]: string } {
    const positions: { [key: string]: { [key: string]: string } } = {
      'head': { 'top': '16px', 'left': '50%', 'transform': 'translateX(-50%)' },
      'brain': { 'top': '24px', 'left': '50%', 'transform': 'translateX(-50%)' },
      'eyes': { 'top': '32px', 'left': '50%', 'transform': 'translateX(-50%)' },
      'heart': { 'top': '112px', 'left': '50%', 'transform': 'translateX(-50%)' },
      'lungs': { 'top': '96px', 'left': '32px' },
      'lungs-right': { 'top': '96px', 'right': '32px' },
      'stomach': { 'top': '176px', 'left': '50%', 'transform': 'translateX(-50%)' },
      'liver': { 'top': '160px', 'right': '32px' },
      'kidneys': { 'top': '208px', 'left': '24px' },
      'kidneys-right': { 'top': '208px', 'right': '24px' }
    };

    return positions[partId] || {};
  }

  trackByAffliction(index: number, affliction: Affliction): string {
    return affliction.name;
  }

  trackByTip(index: number, tip: PreventionTip): string {
    return tip.title;
  }

}
