export interface ServiceDetailData {
    title: string;
    subtitle: string;
    intro: string;
    services: string[];
    diagnostics: string[];
    why_choose: string[];
    faqs: { question: string; answer: string; }[];
    iconClass: string;
    svg: string;
    doctor: string;
}

export const servicesData: { [key: string]: ServiceDetailData } = {
    "Diabetology": {
        "title": "Diabetology",
        "subtitle": "Advanced Diabetes Care & Blood",
        "intro": "Sugar Management Take Control of Diabetes. Live a Healthier, More Active Life. Diabetes is a long-term condition that requires expert care, regular monitoring, and healthy lifestyle choices to prevent complications. Whether you've been newly diagnosed with diabetes, are struggling to control your blood sugar, or need support for diabetes-related health concerns, our Diabetology Department at Dr Buddies Health Hub provides comprehensive, personalized care to help you live a healthier life. Our experienced diabetologists specialize in diagnosing, treating, and managing Type 1 Diabetes,",
        "services": [
            "Diabetes Diagnosis & Management",
            "Type 1 & Type 2 Diabetes Care",
            "Prediabetes Screening & Management",
            "Gestational Diabetes Care",
            "Insulin Therapy & Blood Sugar Monitoring",
            "Diabetic Foot Care",
            "Diabetes Complication Management",
            "Nutrition & Lifestyle Counseling",
            "Weight Management for Diabetes",
            "Preventive Diabetes Health Check-ups"
        ],
        "diagnostics": [
            "evidence-based medical care. From blood sugar management and insulin therapy to diabetic foot care and lifestyle counseling, we focus on delivering personalized treatment plans that improve glucose control, reduce complications, and enhance your overall well-being. We believe that successful diabetes care goes beyond medication. Through patient education, nutrition guidance, regular monitoring, and preventive care, we help you take control of your diabetes with confidence.",
            "Blood Sugar Testing",
            "HbA1c Testing",
            "Continuous Glucose Monitoring (CGM) (where available)",
            "Lipid Profile",
            "Kidney Function Tests",
            "Urine Microalbumin Test",
            "Blood Pressure Monitoring",
            "Diabetic Foot Assessment",
            "Body Mass Index (BMI) Assessment",
            "Comprehensive Diabetes Health Screening Modern diagnostic facilities for accurate blood sugar monitoring, early detection, and effective management of diabetes. Comprehensive Diabetes Care Complete diabetes management, including diagnosis, medication, insulin therapy, lifestyle counseling, complication screening, and long-term follow-up. Compassionate Care We provide patient-centered care with expert guidance, diabetes education, nutritional advice, and continuous support throughout your health journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Diabetologists",
            "Expert diagnosis and treatment for diabetes and metabolic disorders using the latest evidence-based",
            "medical practices.",
            "Personalized Treatment",
            "Individualized diabetes care plans based on your health condition, lifestyle, and long-term treatment",
            "goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a diabetologist?",
                "answer": "You should consult a diabetologist if you have high blood sugar levels, frequent urination, excessive thirst, unexplained weight loss, a family history of diabetes, or need expert guidance in managing diabetes."
            },
            {
                "question": "What types of diabetes do you treat?",
                "answer": "We diagnose and manage Type 1 Diabetes, Type 2 Diabetes, gestational diabetes, prediabetes, and diabetes-related complications."
            },
            {
                "question": "What is an HbA1c test?",
                "answer": "An HbA1c test measures your average blood sugar levels over the past two to three months and helps assess how well your diabetes is being managed."
            },
            {
                "question": "Can diabetes be controlled?",
                "answer": "Yes. While diabetes is a chronic condition, it can often be effectively managed through medication, healthy eating, regular physical activity, weight management, and routine medical follow-up."
            },
            {
                "question": "Do you provide diabetic foot care?",
                "answer": "Yes. We offer diabetic foot screening, preventive care, wound management, and education to help reduce the risk of foot ulcers and other diabetes-related complications."
            }
        ],
        "iconClass": "fa-solid fa-syringe",
        "svg": "iconbg4",
        "doctor": "Dr. Iyad Muhammad P"
    },
    "ENT": {
        "title": "ENT",
        "subtitle": "Advanced Ear, Nose & Throat Care",
        "intro": "Hear Better. Breathe Easier. Speak Clearly. Are Ear, Nose, or Throat Problems Affecting Your Daily Life? Your ears, nose, and throat play an essential role in hearing, breathing, speaking, swallowing, and maintaining your overall well-being. Whether you're experiencing ear pain, hearing loss, sinus problems, allergies, sore throat, voice changes, dizziness, or other ENT conditions, early diagnosis and expert care can help you recover faster and improve your quality of life. Our experienced ENT specialists (Otolaryngologists) at Dr Buddies Health Hub provide comprehensive diagnosis and treatment for a wide range of ear, nose, throat, head, and neck",
        "services": [
            "Ear Care & Hearing Assessment",
            "Hearing Loss Treatment",
            "Nose & Sinus Care",
            "Allergy & Allergic Rhinitis Management",
            "Tonsillitis & Adenoid Treatment",
            "Voice & Swallowing Disorder Care",
            "Vertigo & Balance Disorder Management",
            "Pediatric ENT Care",
            "Head & Neck Disorder Evaluation",
            "Advanced ENT Surgical Procedures"
        ],
        "diagnostics": [
            "ENT problems such as ear infections, sinusitis, tonsillitis, and allergic rhinitis to hearing disorders, sleep apnea, and advanced ENT surgeries, we focus on delivering personalized treatment that restores comfort, improves function, and supports long-term health. We are committed to providing compassionate, patient-centered care for children and adults with complete medical and surgical ENT services.",
            "Audiometry (Hearing Test)",
            "Tympanometry",
            "Nasal Endoscopy",
            "Laryngoscopy",
            "Sinus Evaluation",
            "Allergy Assessment",
            "Balance Function Testing",
            "Head & Neck Examination",
            "CT Scan & MRI Referral (where indicated)",
            "Comprehensive ENT Assessment Modern diagnostic equipment and endoscopic technology for accurate diagnosis and effective treatment. Comprehensive ENT Care Complete ENT services, including medical treatment, minimally invasive procedures, advanced surgery, and long-term follow-up under one roof. Compassionate Care We provide patient-centered care with expert guidance, clear communication, and continuous support throughout your treatment journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced ENT Specialists",
            "Expert diagnosis and treatment for common and complex ear, nose, throat, head, and neck",
            "conditions using modern medical and surgical techniques.",
            "Personalized Treatment",
            "Individualized care plans designed according to your symptoms, medical condition, and long-term",
            "healthcare goals."
        ],
        "faqs": [
            {
                "question": "When should I consult an ENT specialist?",
                "answer": "You should consult an ENT specialist if you experience persistent ear pain, hearing loss, chronic sinus infections, nasal blockage, sore throat, dizziness, voice changes, swallowing difficulties, or recurring ear or throat infections."
            },
            {
                "question": "What conditions do ENT specialists treat?",
                "answer": "We diagnose and treat ear infections, hearing loss, tinnitus, sinusitis, allergic rhinitis, nasal polyps, tonsillitis, adenoid enlargement, vertigo, voice disorders, sleep apnea, and many other ENT conditions."
            },
            {
                "question": "Do you perform ENT surgeries?",
                "answer": "Yes. We perform a variety of ENT procedures, including tonsillectomy, adenoidectomy, septoplasty, sinus surgery, ear surgery, and other advanced ENT procedures based on individual patient needs."
            },
            {
                "question": "Can hearing loss be treated?",
                "answer": "Many types of hearing loss can be effectively managed with medication, hearing aids, minimally invasive procedures, or surgery depending on the underlying cause."
            },
            {
                "question": "Do you provide ENT care for children?",
                "answer": "Yes. We provide specialized pediatric ENT care for children with ear infections, hearing problems, enlarged tonsils or adenoids, sinus conditions, allergies, and other ENT disorders."
            }
        ],
        "iconClass": "fa-solid fa-ear-listen",
        "svg": "iconbg2",
        "doctor": "Dr. Nusfan TT"
    },
    "Gastroenterology & Hepatology": {
        "title": "Gastroenterology & Hepatology",
        "subtitle": "Advanced",
        "intro": "Digestive & Liver Care A Healthy Digestive System Starts with Expert Care. Are Digestive or Liver Problems Affecting Your Daily Life? Digestive and liver disorders can interfere with your comfort, nutrition, and overall well-being. Whether you're experiencing stomach pain, acid reflux, bloating, constipation, diarrhea, liver disease, or other gastrointestinal concerns, early diagnosis and expert medical care can help prevent complications and improve your quality of life. Our experienced gastroenterologists and hepatologists at Dr Buddies Health Hub provide comprehensive diagnosis and treatment for a wide range of digestive and liver conditions using",
        "services": [
            "Gastroenterology Consultation",
            "Liver Disease Diagnosis & Treatment",
            "Upper GI Endoscopy",
            "Colonoscopy",
            "GERD & Acid Reflux Treatment",
            "Irritable Bowel Syndrome (IBS) Management",
            "Inflammatory Bowel Disease (IBD) Care",
            "Hepatitis Treatment",
            "Fatty Liver Disease Management",
            "Pancreatic & Gallbladder Disorder Treatment"
        ],
        "diagnostics": [
            "disorders such as acidity, gastritis, and irritable bowel syndrome (IBS) to complex liver diseases, pancreatitis, inflammatory bowel disease (IBD), and hepatitis, we focus on delivering personalized treatment plans that promote better digestive health and long-term wellness. We are committed to providing compassionate, patient-centered care with accurate diagnosis, advanced endoscopic procedures, and comprehensive management for both acute and chronic gastrointestinal and liver diseases.",
            "Upper GI Endoscopy",
            "Colonoscopy",
            "Liver Function Tests (LFT)",
            "Abdominal Ultrasound",
            "CT Scan",
            "MRI Scan",
            "FibroScan\u00ae (where available)",
            "Endoscopic Biopsy",
            "Hepatitis Screening",
            "Comprehensive Digestive Health Assessment Modern diagnostic facilities and advanced endoscopic technology for accurate diagnosis and effective treatment. Comprehensive Digestive & Liver Care Complete care for digestive disorders, liver diseases, pancreatic conditions, and gastrointestinal health under one roof. Compassionate Care We provide patient-centered care with clear communication, expert guidance, and continuous support throughout your treatment journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Gastroenterologists & Hepatologists",
            "Expert diagnosis and treatment for common and complex digestive and liver disorders using modern",
            "medical techniques.",
            "Personalized Treatment",
            "Individualized treatment plans designed according to your digestive health, liver condition, and long-",
            "term wellness goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a gastroenterologist?",
                "answer": "You should consult a gastroenterologist if you experience persistent stomach pain, acid reflux, bloating, constipation, diarrhea, blood in the stool, difficulty swallowing, unexplained weight loss, or ongoing digestive problems."
            },
            {
                "question": "What conditions do you treat?",
                "answer": "We diagnose and treat acid reflux (GERD), gastritis, stomach ulcers, IBS, IBD, liver disease, fatty liver, hepatitis, gallstones, pancreatitis, constipation, diarrhea, and many other digestive disorders."
            },
            {
                "question": "Do you perform endoscopy and colonoscopy?",
                "answer": "Yes. We provide upper GI endoscopy and colonoscopy for the diagnosis, evaluation, and management of various gastrointestinal conditions."
            },
            {
                "question": "Can fatty liver disease be treated?",
                "answer": "Yes. Fatty liver disease can often be effectively managed through lifestyle modifications, weight management, medical treatment, and regular follow-up depending on the severity of the condition."
            },
            {
                "question": "What is the difference between Gastroenterology and Hepatology?",
                "answer": "Gastroenterology focuses on diseases of the digestive system, while Hepatology is a specialized branch that focuses on diseases affecting the liver, gallbladder, pancreas, and bile ducts. Our department provides comprehensive care for both digestive and liver-related conditions."
            }
        ],
        "iconClass": "fa-solid fa-bacterium",
        "svg": "iconbg3",
        "doctor": "Dr. Sandeep Menon"
    },
    "Gastroenterology": {
        "title": "Gastroenterology",
        "subtitle": "Advanced Digestive Health &",
        "intro": "Gastrointestinal Care Better Digestion. Better Health. Are Digestive Problems Affecting Your Everyday Life? Your digestive system plays a vital role in your overall health and well-being. If you're experiencing stomach pain, acidity, bloating, constipation, diarrhea, difficulty swallowing, or other digestive concerns, early diagnosis and expert medical care can help prevent complications and restore your digestive health. Our experienced gastroenterologists at Dr Buddies Health Hub provide comprehensive diagnosis",
        "services": [
            "Gastroenterology Consultation",
            "Upper GI Endoscopy",
            "Colonoscopy",
            "Acid Reflux (GERD) Treatment",
            "Gastritis & Stomach Ulcer Treatment",
            "Irritable Bowel Syndrome (IBS) Management",
            "Inflammatory Bowel Disease (IBD) Care",
            "Pancreatic Disorder Management",
            "Gallbladder Disease Treatment",
            "Digestive Health Screening"
        ],
        "diagnostics": [
            "and evidence-based medical care. From common digestive conditions such as acid reflux, gastritis, and irritable bowel syndrome (IBS) to complex disorders involving the stomach, intestines, pancreas, and digestive tract, we focus on delivering personalized treatment plans that improve digestive health and enhance your quality of life. We are committed to providing compassionate, patient-centered care through accurate diagnosis, advanced endoscopic procedures, and comprehensive management of both acute and chronic digestive disorders.",
            "Upper GI Endoscopy",
            "Colonoscopy",
            "Abdominal Ultrasound",
            "CT Scan",
            "MRI Scan",
            "Endoscopic Biopsy",
            "Stool Analysis",
            "Blood Investigations",
            "Digestive Health Evaluation",
            "Comprehensive Gastrointestinal Assessment Modern endoscopic technology and diagnostic facilities for accurate evaluation and effective treatment. Comprehensive Digestive Care Complete care for stomach, intestinal, pancreatic, gallbladder, and gastrointestinal disorders under one roof. Compassionate Care We provide patient-centered care with expert guidance, clear communication, and continuous support throughout your treatment journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Gastroenterologists",
            "Expert diagnosis and treatment for common and complex digestive disorders using advanced medical",
            "expertise.",
            "Personalized Treatment",
            "Individualized care plans designed according to your digestive condition, lifestyle, and long-term",
            "health goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a gastroenterologist?",
                "answer": "You should consult a gastroenterologist if you experience persistent stomach pain, acid reflux, bloating, constipation, diarrhea, blood in the stool, difficulty swallowing, unexplained weight loss, or ongoing digestive problems."
            },
            {
                "question": "What conditions do gastroenterologists treat?",
                "answer": "We diagnose and treat acid reflux (GERD), gastritis, stomach ulcers, IBS, IBD, constipation, diarrhea, pancreatitis, gallbladder disorders, gastrointestinal bleeding, and many other digestive conditions."
            },
            {
                "question": "Do you perform endoscopy and colonoscopy?",
                "answer": "Yes. We provide upper GI endoscopy and colonoscopy for the diagnosis, evaluation, and treatment of various digestive disorders."
            },
            {
                "question": "What is an upper GI endoscopy?",
                "answer": "An upper GI endoscopy is a minimally invasive procedure that uses a flexible camera to examine the esophagus, stomach, and upper part of the small intestine to diagnose digestive conditions."
            },
            {
                "question": "Can digestive disorders be prevented?",
                "answer": "Many digestive problems can be prevented or effectively managed through a balanced diet, healthy lifestyle, regular exercise, adequate hydration, avoiding tobacco and excessive alcohol, and seeking timely medical care when symptoms develop."
            }
        ],
        "iconClass": "fa-solid fa-microscope",
        "svg": "iconbg6",
        "doctor": "Dr. Sameer Sakkeer Hussain, Dr. Sandeep Menon"
    },
    "General Medicine": {
        "title": "General Medicine",
        "subtitle": "Comprehensive Adult",
        "intro": "Healthcare & Preventive Care Your Health Comes First. Looking for Trusted Medical Care for Everyday Health Concerns? Good health begins with timely diagnosis, expert treatment, and preventive care. Whether you're experiencing fever, infections, diabetes, high blood pressure, thyroid disorders, digestive problems, or other medical conditions, our General Medicine Department at Dr Buddies Health Hub provides comprehensive healthcare to help you stay healthy at every stage of life. Our experienced General Physicians specialize in diagnosing, treating, and managing a wide range",
        "services": [
            "General Health Consultation",
            "Fever & Infection Management",
            "Diabetes Management",
            "Hypertension (High Blood Pressure) Care",
            "Thyroid Disorder Treatment",
            "Respiratory Disease Management",
            "Digestive Health Care",
            "Lifestyle Disease Management",
            "Preventive Health Check-ups",
            "Chronic Disease Management"
        ],
        "diagnostics": [
            "medical care. From common illnesses such as fever, cough, and infections to long-term conditions like diabetes, hypertension, and thyroid disorders, we focus on delivering personalized treatment plans that promote faster recovery, disease prevention, and long-term wellness. We believe in treating not just the illness, but the whole person\u2014helping you achieve better health through compassionate care, preventive medicine, and continuous medical support.",
            "Complete Blood Tests",
            "Blood Sugar Testing",
            "Thyroid Function Tests",
            "Liver Function Tests",
            "Kidney Function Tests",
            "Lipid Profile",
            "ECG",
            "Chest X-ray",
            "Urine Analysis",
            "Comprehensive Health Screening Modern diagnostic facilities for accurate evaluation, early diagnosis, and effective treatment. Comprehensive Medical Care Complete healthcare services, from routine consultations and preventive screenings to chronic disease management and specialist referrals. Compassionate Care We provide patient-centered care with clear communication, medical guidance, and ongoing support to help you achieve better health. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced General Physicians",
            "Expert diagnosis and treatment for a wide range of common illnesses, chronic diseases, and",
            "preventive healthcare needs.",
            "Personalized Treatment",
            "Individualized care plans tailored to your medical condition, lifestyle, and long-term health goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a General Physician?",
                "answer": "You should consult a General Physician if you have fever, cough, infections, high blood pressure, diabetes, digestive problems, fatigue, thyroid concerns, or any ongoing health issue that requires medical evaluation."
            },
            {
                "question": "What conditions do General Physicians treat?",
                "answer": "We diagnose and treat fever, viral and bacterial infections, diabetes, hypertension, thyroid disorders, respiratory illnesses, digestive problems, allergies, anemia, and many other general medical conditions."
            },
            {
                "question": "Do you provide preventive health check-ups?",
                "answer": "Yes. We offer comprehensive health check-ups, routine screenings, and preventive healthcare services to detect medical conditions early and help maintain overall wellness."
            },
            {
                "question": "Can you manage chronic diseases?",
                "answer": "Yes. Our General Physicians provide long-term care for chronic conditions such as diabetes, hypertension, thyroid disorders, asthma, and high cholesterol through regular monitoring and personalized treatment."
            },
            {
                "question": "Do I need a referral to consult a General Physician?",
                "answer": "No. You can directly book an appointment with our General Medicine specialists for routine check- ups, illness, preventive care, or ongoing medical concerns."
            }
        ],
        "iconClass": "fa-solid fa-stethoscope",
        "svg": "iconbg2",
        "doctor": "Dr. Iyad Muhammad P"
    },
    "General Practitioner": {
        "title": "General Practitioner",
        "subtitle": "Comprehensive Primary &",
        "intro": "Family Healthcare Your First Step to Better Health. Looking for Trusted Medical Care for You and Your Family? A General Practitioner (GP) is your first point of contact for most health concerns, providing comprehensive medical care for individuals and families of all ages. Whether you're experiencing fever, infections, chronic health conditions, minor injuries, or simply need a routine health check-up, timely medical attention can help you stay healthy and prevent complications. Our experienced General Practitioners at Dr Buddies Health Hub provide comprehensive diagnosis and treatment for a wide range of common illnesses and long-term health conditions using advanced diagnostic technology and evidence-based medical care. From routine health consultations and preventive screenings to chronic disease management and specialist referrals, we focus on delivering personalized healthcare that supports your overall well-being. We believe in building long-term relationships with our patients by providing compassionate, accessible, and continuous healthcare for every stage of life.",
        "services": [
            "General Health Consultation",
            "Preventive Health Check-ups",
            "Fever & Infection Management",
            "Diabetes & Hypertension Management",
            "Thyroid Disorder Management",
            "Respiratory Disease Care",
            "Digestive Health Management",
            "Minor Injury & Wound Care",
            "Vaccination & Immunization",
            "Specialist Referral & Care Coordination"
        ],
        "diagnostics": [
            "Complete Blood Tests",
            "Blood Sugar Testing",
            "Thyroid Function Tests",
            "Liver Function Tests",
            "Kidney Function Tests",
            "Lipid Profile",
            "ECG",
            "Chest X-ray",
            "Urine Analysis",
            "Comprehensive Health Screening Modern diagnostic facilities for accurate evaluation, early diagnosis, and effective treatment. Comprehensive Primary Healthcare Complete healthcare services, including routine consultations, preventive care, chronic disease management, vaccinations, and coordinated specialist referrals. Compassionate Care We provide patient-centered care with clear communication, expert medical guidance, and continuous support to help you and your family stay healthy. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced General Practitioners",
            "Expert diagnosis and treatment for common illnesses, chronic diseases, and preventive healthcare",
            "needs for patients of all ages.",
            "Personalized Treatment",
            "Individualized care plans tailored to your medical history, lifestyle, and long-term health goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a General Practitioner?",
                "answer": "You should consult a General Practitioner for fever, infections, cough, cold, allergies, digestive problems, diabetes, high blood pressure, routine health check-ups, vaccinations, or any new or ongoing health concern."
            },
            {
                "question": "What conditions do General Practitioners treat?",
                "answer": "We diagnose and treat common illnesses, respiratory infections, digestive disorders, diabetes, hypertension, thyroid disorders, allergies, minor injuries, skin infections, and many other general medical conditions."
            },
            {
                "question": "Do you provide preventive health check-ups?",
                "answer": "Yes. We offer comprehensive health screenings, routine medical examinations, and preventive healthcare services to help detect diseases early and maintain overall wellness."
            },
            {
                "question": "Can a General Practitioner manage chronic diseases?",
                "answer": "Yes. Our General Practitioners provide ongoing care and monitoring for chronic conditions such as diabetes, hypertension, asthma, thyroid disorders, and high cholesterol, while coordinating specialist referrals when needed."
            },
            {
                "question": "Do I need an appointment to see a General Practitioner?",
                "answer": "Appointments are recommended for convenience, but we also provide timely medical care for urgent health concerns whenever possible."
            }
        ],
        "iconClass": "fa-solid fa-user-doctor",
        "svg": "iconbg5",
        "doctor": "Dr. Shalija M"
    },
    "Gynecology": {
        "title": "Gynecology",
        "subtitle": "Comprehensive Women's Health &",
        "intro": "Pregnancy Care Caring for Every Woman. Every Stage of Life. Is Your Health Getting the Attention It Deserves? A woman's health needs change throughout every stage of life\u2014from adolescence and reproductive years to pregnancy, motherhood, and menopause. Whether you're experiencing menstrual problems, planning a pregnancy, managing hormonal changes, or seeking routine gynecological care, early consultation and expert medical guidance can help you stay healthy and confident. Our experienced gynecologists at Dr Buddies Health Hub provide comprehensive diagnosis and",
        "services": [
            "Routine Gynecological Check-ups",
            "Pregnancy & Antenatal Care",
            "High-Risk Pregnancy Management",
            "Menstrual Disorder Treatment",
            "PCOS & Hormonal Disorder Management",
            "Infertility Evaluation & Counseling",
            "Family Planning & Contraceptive Services",
            "Menopause Care",
            "Minimally Invasive Gynecological Procedures",
            "Women's Preventive Health Screening"
        ],
        "diagnostics": [
            "evidence-based medical care. From routine gynecological check-ups and pregnancy care to PCOS, infertility evaluation, menopause management, and minimally invasive gynecological procedures, we focus on delivering personalized care that supports your reproductive health and overall well-being.",
            "Pelvic Ultrasound",
            "Pregnancy Ultrasound",
            "Pap Smear Test",
            "Cervical Cancer Screening",
            "Hormonal Profile Testing",
            "Pregnancy Monitoring",
            "Fetal Well-being Assessment",
            "Colposcopy (where indicated)",
            "Laboratory Investigations",
            "Comprehensive Women's Health Assessment Modern diagnostic facilities for accurate evaluation, early diagnosis, and effective treatment. Comprehensive Women's Healthcare Complete gynecology services, including preventive care, pregnancy management, reproductive health, hormonal care, and long-term wellness. Compassionate Care We provide confidential, respectful, and patient-centered care with expert guidance and continuous support throughout your healthcare journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving women from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Gynecologists",
            "Expert care for women at every stage of life, from adolescence to pregnancy, menopause, and",
            "beyond.",
            "Personalized Treatment",
            "Individualized care plans designed according to your health condition, lifestyle, and future family",
            "planning goals."
        ],
        "faqs": [
            {
                "question": "When should I visit a gynecologist?",
                "answer": "You should consult a gynecologist for routine check-ups, menstrual irregularities, pelvic pain, pregnancy care, fertility concerns, menopause symptoms, abnormal bleeding, or any reproductive health issue."
            },
            {
                "question": "What conditions do gynecologists treat?",
                "answer": "We diagnose and treat menstrual disorders, PCOS, ovarian cysts, uterine fibroids, endometriosis, infertility, menopause-related conditions, vaginal infections, and other women's health concerns."
            },
            {
                "question": "Do you provide pregnancy care?",
                "answer": "Yes. We offer comprehensive antenatal care, routine pregnancy check-ups, fetal monitoring, high-risk pregnancy management, and postnatal guidance to support both mother and baby."
            },
            {
                "question": "Can PCOS be treated?",
                "answer": "Yes. PCOS can often be effectively managed through lifestyle modifications, medication, hormonal treatment, and regular follow-up based on your individual health needs."
            },
            {
                "question": "Do you provide cervical cancer screening?",
                "answer": "Yes. We offer Pap smear testing and cervical cancer screening to help detect abnormal cervical changes early and support preventive women's healthcare."
            }
        ],
        "iconClass": "fa-solid fa-venus",
        "svg": "iconbg8",
        "doctor": "Dr. Indira"
    },
    "Infertility Medicine": {
        "title": "Infertility Medicine",
        "subtitle": "Advanced Fertility Care &",
        "intro": "Reproductive Health Every Family Begins with Hope. Having Difficulty Conceiving? Starting a family is one of life's most meaningful journeys, but for some couples, conception may take longer than expected. If you've been trying to conceive without success or have concerns about your reproductive health, early evaluation and expert fertility care can help identify the cause and improve your chances of a healthy pregnancy. Our experienced fertility specialists at Dr Buddies Health Hub provide comprehensive diagnosis and",
        "services": [
            "Female Fertility Evaluation",
            "Male Fertility Evaluation",
            "Infertility Consultation & Counseling",
            "Ovulation Induction Treatment",
            "Intrauterine Insemination (IUI)",
            "IVF Consultation & Guidance",
            "PCOS & Hormonal Disorder Management",
            "Recurrent Pregnancy Loss Evaluation",
            "Preconception Counseling",
            "Fertility Health Screening"
        ],
        "diagnostics": [
            "based reproductive care. From fertility evaluation and ovulation disorders to PCOS, male infertility, and assisted reproductive treatments, we focus on delivering personalized care that supports your journey toward parenthood. We understand that infertility can be emotionally challenging. Our compassionate team offers confidential, patient-centered care, guiding you through every step with expertise, understanding, and hope.",
            "Hormonal Profile Testing",
            "Ovulation Monitoring",
            "Pelvic Ultrasound",
            "Semen Analysis",
            "Ovarian Reserve Testing",
            "Pregnancy Hormone Testing",
            "Thyroid Function Tests",
            "Reproductive Health Screening",
            "Laboratory Investigations",
            "Comprehensive Fertility Assessment Modern fertility testing and diagnostic facilities for accurate evaluation and effective treatment planning. Comprehensive Fertility Care Complete fertility services from evaluation and counseling to medical treatment, IUI, fertility guidance, and long-term reproductive care. Compassionate Care We provide confidential, respectful, and patient-centered care with emotional support and expert guidance throughout your fertility journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving couples from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Fertility Specialists",
            "Expert diagnosis and treatment for male and female infertility using the latest evidence-based",
            "reproductive medicine.",
            "Personalized Treatment",
            "Individualized fertility care plans tailored to your medical history, reproductive health, and family",
            "planning goals."
        ],
        "faqs": [
            {
                "question": "When should we consult a fertility specialist?",
                "answer": "Couples should consider consulting a fertility specialist if pregnancy has not occurred after one year of regular unprotected intercourse, or after six months if the woman is over 35 years of age."
            },
            {
                "question": "What causes infertility?",
                "answer": "Infertility can result from factors affecting either partner, including ovulation disorders, hormonal imbalances, blocked fallopian tubes, low sperm count, poor sperm motility, age-related changes, or unexplained causes."
            },
            {
                "question": "Do you provide fertility testing for both men and women?",
                "answer": "Yes. We offer comprehensive fertility evaluations for both partners to identify the underlying causes of infertility and recommend the most appropriate treatment."
            },
            {
                "question": "Do you offer IUI and IVF services?",
                "answer": "We provide fertility evaluation, IUI treatment where appropriate, and IVF consultation and guidance. If IVF is recommended and not available onsite, we guide you through the next steps and coordinate appropriate referral when needed."
            },
            {
                "question": "Can PCOS affect fertility?",
                "answer": "Yes. Polycystic Ovary Syndrome (PCOS) can affect ovulation and make conception more difficult. With proper diagnosis, lifestyle management, medication, and fertility treatment, many women with PCOS are able to achieve a healthy pregnancy."
            }
        ],
        "iconClass": "fa-solid fa-seedling",
        "svg": "iconbg5",
        "doctor": "Dr. Iyad Muhammad P"
    },
    "Laparoscopic Surgery": {
        "title": "Laparoscopic Surgery",
        "subtitle": "Advanced Minimally",
        "intro": "Invasive Surgical Care Smaller Incisions. Faster Recovery. Better Surgical Outcomes. Need Surgery with Less Pain and Quicker Recovery? Modern laparoscopic surgery, also known as minimally invasive or keyhole surgery, offers an advanced approach to treating many abdominal conditions with smaller incisions, less pain, reduced scarring, and faster recovery. If you've been advised to undergo surgery for gallstones, hernia, appendicitis, or other abdominal conditions, expert laparoscopic care can help you return to your normal life sooner. Our experienced laparoscopic surgeons at Dr Buddies Health Hub provide comprehensive diagnosis and advanced minimally invasive surgical treatment using state-of-the-art laparoscopic technology and evidence-based surgical techniques. From common procedures such as gallbladder removal and hernia repair to complex gastrointestinal surgeries, we focus on delivering safe, precise, and personalized surgical care with the best possible outcomes. Our goal is to provide high-quality surgical care while ensuring your comfort, safety, and a smooth recovery at every stage of your treatment.",
        "services": [
            "Laparoscopic Gallbladder Surgery (Cholecystectomy)",
            "Laparoscopic Hernia Repair",
            "Laparoscopic Appendectomy (Appendix Surgery)",
            "Diagnostic Laparoscopy",
            "Minimally Invasive Gastrointestinal Surgery",
            "Laparoscopic Colorectal Surgery",
            "Bariatric (Weight Loss) Surgery Evaluation",
            "Emergency Laparoscopic Procedures",
            "Postoperative Care & Follow-up",
            "Surgical Consultation & Second Opinion"
        ],
        "diagnostics": [
            "Digital Ultrasound",
            "Digital X-ray",
            "CT Scan",
            "MRI Scan",
            "Diagnostic Laparoscopy",
            "Preoperative Health Evaluation",
            "Laboratory Investigations",
            "High-Definition Laparoscopic Imaging System",
            "Comprehensive Surgical Assessment",
            "Postoperative Recovery Monitoring"
        ],
        "why_choose": [
            "Experienced Laparoscopic Surgeons",
            "Expert surgical care for a wide range of abdominal conditions using advanced minimally invasive",
            "techniques.",
            "Personalized Treatment",
            "Individualized surgical plans based on your medical condition, overall health, and recovery goals.",
            "Advanced Surgical Technology",
            "Modern laparoscopic equipment and high-definition imaging provide greater precision, improved",
            "safety, and better surgical outcomes.",
            "Comprehensive Surgical Care",
            "Complete care from consultation and diagnosis to surgery, recovery, rehabilitation, and long-term",
            "follow-up.",
            "Compassionate Care",
            "We provide patient-centered care with clear communication, expert guidance, and continuous support",
            "throughout your surgical journey.",
            "Convenient Location",
            "Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur,",
            "Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "faqs": [
            {
                "question": "What is laparoscopic surgery?",
                "answer": "Laparoscopic surgery is a minimally invasive surgical technique performed through small incisions using a tiny camera and specialized surgical instruments to diagnose and treat various abdominal conditions."
            },
            {
                "question": "What are the advantages of laparoscopic surgery?",
                "answer": "Compared with traditional open surgery, laparoscopic surgery often offers smaller scars, less pain, shorter hospital stays, quicker recovery, lower risk of infection, and an earlier return to normal activities. The benefits depend on the type of surgery and your individual condition."
            },
            {
                "question": "Which conditions can be treated with laparoscopic surgery?",
                "answer": "Laparoscopic surgery is commonly used for gallstones, hernias, appendicitis, selected gastrointestinal disorders, colorectal conditions, and other abdominal diseases when appropriate."
            },
            {
                "question": "Is laparoscopic surgery safe?",
                "answer": "Yes. Laparoscopic surgery is a well-established and safe procedure when performed by experienced surgeons. Your doctor will recommend the most suitable surgical approach based on your medical condition."
            },
            {
                "question": "How long does recovery take after laparoscopic surgery?",
                "answer": "Recovery varies depending on the procedure performed and your overall health. Most patients recover faster than with traditional open surgery and can resume normal daily activities sooner, following their surgeon's advice."
            }
        ],
        "iconClass": "fa-solid fa-scissors",
        "svg": "iconbg8",
        "doctor": "Dr. Muhammed Shameem"
    },
    "Laparoscopic": {
        "title": "Laparoscopic Surgery",
        "subtitle": "Expert Minimally",
        "intro": "Invasive Surgical Care Smaller Incisions. Faster Recovery. Better Surgical Care. Need surgery but worried about pain, scars, or a long recovery? Modern laparoscopic surgery offers a minimally invasive approach that helps patients recover faster while reducing discomfort and hospital stay. Our experienced laparoscopic surgeons at Dr Buddies Health Hub provide expert diagnosis, consultation, and advanced minimally invasive surgical treatment for a wide range of abdominal and gastrointestinal conditions. Using state-of-the-art laparoscopic technology and evidence-based surgical techniques, we perform procedures with greater precision, helping patients experience less pain, smaller scars, reduced risk of complications, and a quicker return to their daily lives. Whether you require treatment for gallstones, hernias, appendicitis, gastrointestinal disorders, or other surgical conditions, our team delivers personalized surgical care focused on safety, comfort, and successful outcomes.",
        "services": [
            "Laparoscopic Gallbladder Surgery (Cholecystectomy)",
            "Laparoscopic Hernia Repair",
            "Laparoscopic Appendix Surgery (Appendectomy)",
            "Diagnostic Laparoscopy",
            "Minimally Invasive Gastrointestinal Surgery",
            "Laparoscopic Colorectal Surgery",
            "Bariatric (Weight Loss) Surgery Evaluation",
            "Emergency Laparoscopic Procedures",
            "Post-Operative Care & Follow-up",
            "Surgical Consultation & Second Opinion Conditions We Treat",
            "Gallstones",
            "Gallbladder Disease",
            "Appendicitis",
            "Inguinal Hernia",
            "Umbilical Hernia",
            "Incisional Hernia",
            "Hiatal Hernia",
            "Gastroesophageal Re\ufb02ux Disease (GERD)",
            "Abdominal Pain Requiring Surgical Evaluation",
            "Intestinal Disorders",
            "Colorectal Conditions",
            "Selected Gastrointestinal Tumors",
            "Abdominal Cysts",
            "Adhesions"
        ],
        "diagnostics": [
            "Digital Ultrasound",
            "Digital X-ray",
            "CT Scan",
            "MRI Scan",
            "Diagnostic Laparoscopy",
            "Preoperative Health Evaluation",
            "Laboratory Investigations",
            "High-De\ufb01nition Laparoscopic Equipment",
            "Postoperative Recovery Monitoring",
            "Comprehensive Surgical Assessment"
        ],
        "why_choose": [
            "Experienced Laparoscopic Surgeons",
            "Our specialists have extensive experience in performing advanced minimally invasive",
            "surgical procedures with precision and care.",
            "Advanced Surgical Technology",
            "We use modern laparoscopic equipment and high-de\ufb01nition imaging to improve surgical",
            "accuracy and patient safety.",
            "Personalized Surgical Care",
            "Every patient receives a customized treatment plan based on their condition, medical",
            "history, and recovery goals.",
            "Faster Recovery",
            "Smaller incisions often result in less pain, shorter hospital stays, faster healing, and an",
            "earlier return to daily activities compared with traditional open surgery.",
            "Comprehensive Surgical Support",
            "From consultation and diagnosis to surgery, recovery, and follow-up care, we provide",
            "complete surgical services under one roof.",
            "Convenient Location",
            "Conveniently located in Calicut (Kozhikode), serving patients from Malappuram, Kannur,",
            "Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "faqs": [
            {
                "question": "What is laparoscopic surgery?",
                "answer": "Laparoscopic surgery, also known as keyhole surgery or minimally invasive surgery, is performed through small incisions using a tiny camera and specialized surgical instruments."
            },
            {
                "question": "What are the advantages of laparoscopic surgery?",
                "answer": "Laparoscopic surgery typically offers smaller scars, less pain, shorter hospital stays, faster recovery, and a quicker return to normal activities compared with traditional open surgery, depending on the procedure and individual patient."
            },
            {
                "question": "Which conditions can be treated with laparoscopic surgery?",
                "answer": "Many conditions, including gallstones, appendicitis, hernias, GERD, and selected gastrointestinal disorders, can be treated using laparoscopic techniques when appropriate."
            },
            {
                "question": "Is laparoscopic surgery safe?",
                "answer": "Yes. When performed by experienced laparoscopic surgeons, it is a well-established and safe surgical approach. Your surgeon will recommend the most appropriate treatment based on your medical condition."
            },
            {
                "question": "How long does recovery take?",
                "answer": "Recovery depends on the type of surgery and your overall health. Many patients recover more quickly than after open surgery and are able to return to their normal routine sooner. Book Your Laparoscopic Surgery Consultation Today If you have been advised to undergo surgery or are looking for a minimally invasive treatment option, our experienced laparoscopic surgeons are here to help. Book your consultation today and experience advanced laparoscopic surgery in Calicut (Kozhikode). We are committed to providing safe, effective, and personalized surgical care to help you recover faster and get back to living your life with con\ufb01dence."
            }
        ],
        "iconClass": "fa-solid fa-circle-nodes",
        "svg": "iconbg1",
        "doctor": "Dr. Muhammed Shameem"
    },
    "Nephrology": {
        "title": "Nephrology",
        "subtitle": "Advanced Kidney Care & Dialysis",
        "intro": "Services Healthy Kidneys. Healthier Life. Are Kidney Problems Affecting Your Well-Being? Your kidneys play a vital role in filtering waste, maintaining fluid balance, controlling blood pressure, and supporting your overall health. If you're experiencing swelling, kidney stones, urinary problems, high blood pressure, or have been diagnosed with chronic kidney disease, early evaluation and expert care can help protect your kidney function and prevent complications. Our experienced nephrologists at Dr Buddies Health Hub provide comprehensive diagnosis and",
        "services": [
            "Kidney Disease Diagnosis & Treatment",
            "Chronic Kidney Disease (CKD) Management",
            "Acute Kidney Injury (AKI) Treatment",
            "Hemodialysis Services",
            "Kidney Stone Evaluation & Management",
            "Hypertension (High Blood Pressure) Management",
            "Diabetic Kidney Disease Care",
            "Electrolyte & Fluid Balance Management",
            "Preventive Kidney Health Screening",
            "Pre-Dialysis & Post-Dialysis Care"
        ],
        "diagnostics": [
            "based medical care. From common kidney conditions such as kidney stones, urinary abnormalities, and high blood pressure to chronic kidney disease, dialysis care, and complex renal disorders, we focus on delivering personalized treatment that helps preserve kidney health and improve your quality of life.",
            "Kidney Function Tests",
            "Blood Urea & Serum Creatinine Testing",
            "Estimated Glomerular Filtration Rate (eGFR)",
            "Urine Analysis",
            "Urine Protein & Microalbumin Testing",
            "Electrolyte Testing",
            "Kidney Ultrasound",
            "CT Scan (where indicated)",
            "Blood Pressure Monitoring",
            "Comprehensive Kidney Health Assessment Modern diagnostic facilities for accurate evaluation, early diagnosis, and effective treatment. Comprehensive Kidney Care Complete nephrology services from early diagnosis and preventive care to dialysis and long-term kidney disease management. Compassionate Care We provide patient-centered care with clear communication, continuous guidance, and ongoing support throughout your treatment journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Nephrologists",
            "Expert care for common and complex kidney diseases using the latest medical guidelines and",
            "advanced treatment approaches.",
            "Personalized Treatment",
            "Individualized care plans designed to protect kidney function and support long-term health."
        ],
        "faqs": [
            {
                "question": "When should I consult a nephrologist?",
                "answer": "You should consult a nephrologist if you have kidney disease, kidney stones, swelling in the legs or face, blood in the urine, persistent high blood pressure, diabetes affecting your kidneys, or abnormal kidney function test results."
            },
            {
                "question": "What is chronic kidney disease (CKD)?",
                "answer": "Chronic Kidney Disease (CKD) is a long-term condition in which the kidneys gradually lose their ability to function properly. Early diagnosis and treatment can help slow disease progression and reduce complications."
            },
            {
                "question": "Do you provide dialysis services?",
                "answer": "Yes. We provide comprehensive hemodialysis services along with pre-dialysis counseling, ongoing monitoring, and post-dialysis care for patients with advanced kidney disease."
            },
            {
                "question": "Can kidney disease be prevented?",
                "answer": "Many kidney diseases can be prevented or managed through regular health check-ups, proper diabetes and blood pressure control, a healthy diet, adequate hydration, and timely medical treatment."
            },
            {
                "question": "What are the common symptoms of kidney disease?",
                "answer": "Common symptoms include swelling of the feet or face, fatigue, changes in urination, blood in the urine, persistent high blood pressure, nausea, and loss of appetite. Early medical evaluation is important, as kidney disease may not cause symptoms in its early stages."
            }
        ],
        "iconClass": "fa-solid fa-droplet",
        "svg": "iconbg3",
        "doctor": "Dr. Jayameena"
    },
    "Oncology": {
        "title": "Oncology",
        "subtitle": "Advanced Cancer Care &",
        "intro": "Comprehensive Treatment Hope Begins with Expert Care. Facing Cancer Doesn't Mean Facing It Alone. A cancer diagnosis can be overwhelming, but with the right medical team, timely diagnosis, and personalized treatment, you can face your journey with confidence and hope. Whether you need cancer screening, diagnosis, chemotherapy, follow-up care, or support for a complex cancer condition, our Oncology Department at Dr Buddies Health Hub is committed to providing compassionate, evidence-based cancer care at every stage. Our experienced oncologists provide comprehensive diagnosis and treatment for a wide range of",
        "services": [
            "Cancer Screening & Early Detection",
            "Medical Oncology Consultation",
            "Chemotherapy Services",
            "Targeted Therapy",
            "Immunotherapy",
            "Hormonal Therapy",
            "Cancer Diagnosis & Evaluation",
            "Supportive & Palliative Care",
            "Cancer Follow-up & Survivorship Care",
            "Multidisciplinary Cancer Management"
        ],
        "diagnostics": [
            "approach. From early cancer detection and chemotherapy to targeted therapy, immunotherapy, and supportive care, we focus on delivering personalized treatment plans that improve outcomes while maintaining your quality of life. We understand that cancer care goes beyond treatment. Our team is dedicated to supporting patients and their families with compassion, guidance, and continuous care throughout every step of the journey.",
            "Cancer Screening Programs",
            "Biopsy Services",
            "Histopathology",
            "CT Scan",
            "MRI Scan",
            "PET-CT Referral (where indicated)",
            "Ultrasound Evaluation",
            "Tumor Marker Testing",
            "Laboratory Investigations",
            "Comprehensive Cancer Assessment Modern diagnostic facilities for accurate cancer detection, staging, treatment planning, and ongoing monitoring. Comprehensive Cancer Care Complete oncology services, including screening, diagnosis, chemotherapy, targeted therapy, supportive care, and long-term follow-up under one roof. Compassionate Care We provide patient-centered care with empathy, clear communication, emotional support, and continuous guidance for patients and their families throughout the cancer journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Oncologists",
            "Expert diagnosis and treatment for common and complex cancers using the latest evidence-based",
            "medical practices.",
            "Personalized Treatment",
            "Individualized cancer treatment plans designed according to your diagnosis, stage of cancer, overall",
            "health, and personal treatment goals."
        ],
        "faqs": [
            {
                "question": "When should I consult an oncologist?",
                "answer": "You should consult an oncologist if you have a confirmed cancer diagnosis, suspicious symptoms, abnormal biopsy results, unusual lumps, unexplained weight loss, persistent fatigue, or if you require a second opinion regarding cancer treatment."
            },
            {
                "question": "What types of cancer do you treat?",
                "answer": "We provide care for a wide range of cancers, including breast cancer, lung cancer, colorectal cancer, prostate cancer, cervical cancer, ovarian cancer, liver cancer, blood cancers, and many other solid tumors."
            },
            {
                "question": "Do you provide chemotherapy?",
                "answer": "Yes. We offer chemotherapy services with careful monitoring, supportive care, and personalized treatment plans to ensure the safest and most effective care possible."
            },
            {
                "question": "Can cancer be detected early?",
                "answer": "Yes. Regular health screenings, early evaluation of symptoms, and timely medical consultation can help detect many cancers at an earlier stage, when treatment is often more effective."
            },
            {
                "question": "Do you provide follow-up care after cancer treatment?",
                "answer": "Yes. We provide long-term follow-up, survivorship care, regular monitoring, and supportive services to help patients maintain their health and detect any recurrence or treatment-related concerns as early as possible."
            }
        ],
        "iconClass": "fa-solid fa-ribbon",
        "svg": "iconbg1",
        "doctor": "Dr. Rifayi V"
    },
    "Ophthalmology": {
        "title": "Ophthalmology",
        "subtitle": "Advanced Eye Care & Vision",
        "intro": "Services Clear Vision. Better Life. Are Eye Problems Affecting Your Daily Activities? Your eyes are essential to your everyday life, and maintaining good vision is important for your overall well-being. Whether you're experiencing blurred vision, eye pain, redness, cataracts, glaucoma, diabetic eye disease, or other vision problems, early diagnosis and expert eye care can help protect your eyesight and prevent future complications. Our experienced ophthalmologists at Dr Buddies Health Hub provide comprehensive diagnosis and",
        "services": [
            "Comprehensive Eye Examination",
            "Cataract Evaluation & Surgery",
            "Glaucoma Diagnosis & Management",
            "Diabetic Eye Screening",
            "Retina Evaluation & Treatment",
            "Refractive Error Assessment",
            "Dry Eye Management",
            "Corneal Disease Treatment",
            "Pediatric Eye Care",
            "Eye Injury & Emergency Eye Care"
        ],
        "diagnostics": [
            "based medical care. From routine eye examinations and vision correction to cataract surgery, glaucoma management, retinal care, and pediatric ophthalmology, we focus on delivering personalized treatment that helps preserve and improve your vision. We are committed to providing compassionate, patient-centered eye care for children, adults, and senior citizens, ensuring healthy vision at every stage of life.",
            "Digital Vision Testing",
            "Slit Lamp Examination",
            "Fundus Examination",
            "Optical Coherence Tomography (OCT)",
            "Tonometry (Eye Pressure Measurement)",
            "Visual Field Testing",
            "Retinal Imaging",
            "Corneal Evaluation",
            "Biometry for Cataract Surgery",
            "Comprehensive Eye Health Assessment Modern ophthalmic diagnostic equipment for accurate evaluation, early detection, and effective treatment. Comprehensive Eye Care Complete eye care services including preventive eye examinations, medical treatment, advanced eye surgery, and long-term vision care. Compassionate Care We provide patient-centered care with expert guidance, clear communication, and continuous support to help protect and preserve your vision. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Ophthalmologists",
            "Expert diagnosis and treatment for common and complex eye conditions using advanced ophthalmic",
            "care.",
            "Personalized Treatment",
            "Individualized treatment plans designed according to your eye condition, vision needs, and long-term",
            "eye health goals."
        ],
        "faqs": [
            {
                "question": "When should I consult an ophthalmologist?",
                "answer": "You should consult an ophthalmologist if you experience blurred vision, eye pain, redness, double vision, flashes of light, floaters, eye injuries, or sudden changes in your eyesight."
            },
            {
                "question": "What eye conditions do you treat?",
                "answer": "We diagnose and treat cataracts, glaucoma, diabetic retinopathy, refractive errors, dry eye syndrome, retinal disorders, corneal diseases, eye infections, and many other eye conditions."
            },
            {
                "question": "Do you perform cataract surgery?",
                "answer": "Yes. We provide comprehensive cataract evaluation and advanced cataract surgery using modern surgical techniques to restore clear vision."
            },
            {
                "question": "How often should I have an eye examination?",
                "answer": "Adults should have regular eye examinations as recommended by their ophthalmologist. People with diabetes, glaucoma, or other eye conditions may require more frequent check-ups."
            },
            {
                "question": "Can diabetic eye disease be prevented?",
                "answer": "Regular diabetic eye screenings, good blood sugar control, healthy blood pressure management, and timely treatment can help reduce the risk of vision loss caused by diabetic eye disease."
            }
        ],
        "iconClass": "fa-solid fa-eye",
        "svg": "iconbg1",
        "doctor": "Dr. Jazeel K, Dr. Najwa PT"
    },
    "Orthopedics": {
        "title": "Orthopedics",
        "subtitle": "Advanced Bone, Joint & Spine",
        "intro": "Care Move Better. Live Pain-Free. Is Bone or Joint Pain Affecting Your Daily Life? Bone, joint, muscle, or spine pain can make even the simplest activities difficult. Whether you're struggling with knee pain, back pain, arthritis, sports injuries, fractures, or shoulder pain, early diagnosis and expert orthopedic care can help you regain mobility and improve your quality of life. Our experienced orthopedic specialists at Dr Buddies Health Hub provide comprehensive diagnosis and treatment for a wide range of musculoskeletal conditions using advanced diagnostic technology and evidence-based medical care. From common orthopedic problems like arthritis, joint pain, and fractures to complex spine disorders and sports injuries, we focus on delivering personalized treatment that helps you recover faster, move comfortably, and return to your everyday activities with con\ufb01dence.",
        "services": [
            "Orthopedic Consultation & Evaluation",
            "Joint Pain Management",
            "Arthritis Treatment",
            "Fracture & Trauma Care",
            "Sports Injury Management",
            "Knee Replacement Surgery",
            "Hip Replacement Surgery",
            "Spine Care & Back Pain Treatment",
            "Shoulder, Elbow & Wrist Care",
            "Foot & Ankle Treatment",
            "Pediatric Orthopedic Care",
            "Orthopedic Rehabilitation",
            "Minimally Invasive Orthopedic Procedures"
        ],
        "diagnostics": [
            "Digital X-ray",
            "MRI Scan",
            "CT Scan",
            "Bone Density Test (DEXA Scan)",
            "Musculoskeletal Ultrasound",
            "Joint Function Assessment",
            "Laboratory Investigations",
            "Preoperative Assessment",
            "Postoperative Recovery Monitoring",
            "Comprehensive Orthopedic Evaluation State-of-the-art imaging and diagnostic facilities for accurate diagnosis and effective treatment. Comprehensive Orthopedic Care Complete orthopedic services from diagnosis and treatment to surgery, rehabilitation, and long-term follow-up. Compassionate Care We listen carefully, explain every step of your treatment, and support you throughout your recovery journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Orthopedic Specialists",
            "Expert diagnosis and treatment for bone, joint, muscle, and spine conditions using modern",
            "orthopedic techniques.",
            "Personalized Treatment",
            "Customized treatment plans based on your condition, lifestyle, and recovery goals."
        ],
        "faqs": [
            {
                "question": "When should I consult an orthopedic specialist?",
                "answer": "You should consult an orthopedic specialist if you have persistent joint pain, back pain, fractures, sports injuries, difficulty walking, swelling, or reduced movement in your bones or joints."
            },
            {
                "question": "Do all orthopedic conditions require surgery?",
                "answer": "No. Many orthopedic conditions can be successfully treated with medication, physiotherapy, lifestyle modi\ufb01cations, and minimally invasive procedures. Surgery is recommended only when necessary."
            },
            {
                "question": "Do you provide joint replacement surgery?",
                "answer": "Yes. We offer advanced knee and hip replacement procedures for eligible patients using modern surgical techniques to improve mobility and reduce pain."
            },
            {
                "question": "Can sports injuries be treated without surgery?",
                "answer": "Yes. Many sports injuries can be managed through rehabilitation, physiotherapy, medication, and non-surgical treatments, depending on the severity of the injury."
            },
            {
                "question": "What conditions do orthopedic specialists treat?",
                "answer": "Our orthopedic specialists treat arthritis, fractures, joint pain, sports injuries, spine disorders, ligament injuries, tendon problems, osteoporosis, and many other musculoskeletal conditions."
            }
        ],
        "iconClass": "fa-solid fa-bone",
        "svg": "iconbg2",
        "doctor": "Dr. Sunil Lal K"
    },
    "Pediatrics": {
        "title": "Pediatrics",
        "subtitle": "Comprehensive Child Healthcare &",
        "intro": "Wellness Healthy Children. Happy Families. Is Your Child's Health Your Biggest Priority? Every child deserves the best possible healthcare from infancy through adolescence. Whether your child needs routine check-ups, vaccinations, treatment for common illnesses, growth monitoring, or specialized pediatric care, our Pediatrics Department at Dr Buddies Health Hub provides compassionate, comprehensive, and family-centered healthcare for children of all ages. Our experienced pediatricians specialize in diagnosing, treating, and preventing a wide range of",
        "services": [
            "Newborn & Infant Care",
            "Child Health Check-ups",
            "Vaccination & Immunization",
            "Growth & Development Assessment",
            "Nutritional Counseling",
            "Fever & Infection Management",
            "Asthma & Allergy Care",
            "Pediatric Respiratory Care",
            "Childhood Disease Management",
            "Adolescent Healthcare"
        ],
        "diagnostics": [
            "newborn care and developmental assessments to the management of infections, allergies, asthma, and chronic childhood conditions, we focus on delivering personalized care that supports your child's healthy growth and overall well-being. We believe that every child deserves gentle, compassionate care in a safe and child-friendly environment. Our goal is to help children grow healthier, stronger, and happier at every stage of life.",
            "Child Health Screening",
            "Growth & Development Evaluation",
            "Vaccination Assessment",
            "Laboratory Investigations",
            "Blood Tests",
            "Urine Analysis",
            "Allergy Assessment",
            "Respiratory Evaluation",
            "Nutritional Assessment",
            "Comprehensive Pediatric Health Check-up Modern diagnostic facilities for accurate diagnosis, early detection, and effective treatment of childhood illnesses. Comprehensive Pediatric Care Complete child healthcare services, including preventive care, vaccinations, developmental monitoring, diagnosis, treatment, and long-term follow-up. Compassionate Care We provide a warm, child-friendly environment where every child and family receives compassionate care, clear guidance, and continuous support. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving families from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Pediatricians",
            "Expert care for newborns, infants, children, and adolescents with a focus on healthy growth and",
            "development.",
            "Personalized Child Care",
            "Individualized treatment plans tailored to your child's age, health condition, and developmental needs."
        ],
        "faqs": [
            {
                "question": "When should I take my child to a pediatrician?",
                "answer": "You should visit a pediatrician for routine health check-ups, vaccinations, fever, cough, breathing problems, digestive issues, allergies, growth concerns, developmental delays, or any illness affecting your child's health."
            },
            {
                "question": "Do you provide childhood vaccinations?",
                "answer": "Yes. We offer routine childhood immunizations according to recommended vaccination schedules to protect children from preventable diseases."
            },
            {
                "question": "Do you treat newborn babies?",
                "answer": "Yes. Our pediatricians provide comprehensive newborn care, including health assessments, feeding guidance, growth monitoring, and treatment of newborn illnesses."
            },
            {
                "question": "Can you help with my child's growth and development?",
                "answer": "Yes. We regularly monitor your child's physical growth, developmental milestones, nutrition, and overall health to ensure healthy development."
            },
            {
                "question": "What common childhood conditions do you treat?",
                "answer": "We diagnose and treat fever, viral infections, respiratory infections, asthma, allergies, digestive problems, skin conditions, nutritional deficiencies, and many other childhood illnesses."
            }
        ],
        "iconClass": "fa-solid fa-baby",
        "svg": "iconbg6",
        "doctor": "Dr. Sudha Krishnanunni, Dr. Hasna Jasmine A K, Dr. Abdul Rauf KK"
    },
    "Psychiatry": {
        "title": "Psychiatry",
        "subtitle": "Advanced Mental Health &",
        "intro": "Emotional Wellness Care Your Mental Health Matters. Feeling Overwhelmed, Anxious, or Emotionally Exhausted? Mental health is just as important as physical health. Stress, anxiety, depression, sleep problems, mood changes, and other emotional challenges can affect your relationships, work, and overall quality of life. Seeking professional help early can make a meaningful difference in your recovery and well-being. Our experienced psychiatrists at Dr Buddies Health Hub provide comprehensive diagnosis and treatment for a wide range of mental health conditions using evidence-based medical care and personalized treatment plans. From anxiety, depression, and stress-related disorders to bipolar disorder, obsessive-compulsive disorder (OCD), sleep disorders, and addiction-related conditions, we focus on helping individuals achieve better mental health, emotional balance, and improved quality of life. We understand that every person's mental health journey is unique. Our compassionate team provides con\ufb01dential, respectful, and patient-centered care in a safe and supportive environment where you can speak openly and receive the help you deserve.",
        "services": [
            "Comprehensive Psychiatric Consultation",
            "Anxiety Disorder Treatment",
            "Depression Management",
            "Stress & Emotional Health Support",
            "Bipolar Disorder Treatment",
            "Obsessive-Compulsive Disorder (OCD) Care",
            "Sleep Disorder Management",
            "Addiction & Substance Use Treatment",
            "Child & Adolescent Psychiatry",
            "Geriatric Mental Health Care"
        ],
        "diagnostics": [
            "Comprehensive Mental Health Assessment",
            "Psychiatric Evaluation",
            "Psychological Screening",
            "Cognitive Assessment",
            "Behavioral Assessment",
            "Sleep Disorder Evaluation",
            "Addiction Assessment",
            "Medication Review",
            "Risk Assessment",
            "Laboratory Investigations (where indicated)"
        ],
        "why_choose": [
            "Experienced Psychiatrists",
            "Expert diagnosis and treatment for a wide range of mental health conditions using modern,",
            "evidence-based psychiatric care.",
            "Personalized Treatment",
            "Individualized treatment plans tailored to your emotional, psychological, and medical needs",
            "to support long-term recovery and well-being.",
            "Comprehensive Mental Healthcare",
            "Complete psychiatric care, including diagnosis, medication management, counseling",
            "support, follow-up care, and long-term mental wellness management.",
            "Con\ufb01dential & Compassionate Care",
            "We provide a safe, con\ufb01dential, and non-judgmental environment where every patient is",
            "treated with dignity, respect, and empathy.",
            "Holistic Approach",
            "We focus on improving emotional well-being, daily functioning, and quality of life through",
            "comprehensive treatment, education, and ongoing support.",
            "Convenient Location",
            "Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur,",
            "Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "faqs": [
            {
                "question": "When should I consult a psychiatrist?",
                "answer": "You should consult a psychiatrist if you experience persistent sadness, anxiety, panic attacks, mood swings, sleep disturbances, emotional distress, difficulty coping with daily life, or any mental health concern affecting your personal or professional life."
            },
            {
                "question": "What conditions do psychiatrists treat?",
                "answer": "We diagnose and treat anxiety disorders, depression, bipolar disorder, OCD, PTSD, schizophrenia, sleep disorders, addiction, stress-related conditions, ADHD, and other emotional and behavioral health disorders."
            },
            {
                "question": "Will my consultation be con\ufb01dential?",
                "answer": "Yes. All psychiatric consultations and treatment are conducted with strict con\ufb01dentiality, privacy, and respect for every patient's personal information."
            },
            {
                "question": "Do psychiatrists prescribe medication?",
                "answer": "Yes. Psychiatrists are medical doctors who can prescribe medications when appropriate and develop personalized treatment plans based on your condition and healthcare needs."
            },
            {
                "question": "Can mental health conditions be treated successfully?",
                "answer": "Yes. Many mental health conditions can be effectively managed with early diagnosis, appropriate medication, psychotherapy when indicated, lifestyle modi\ufb01cations, and regular follow-up care, helping individuals lead healthy and ful\ufb01lling lives."
            }
        ],
        "iconClass": "fa-solid fa-brain",
        "svg": "iconbg4",
        "doctor": "Psychiatry Department"
    },
    "Rheumatology": {
        "title": "Rheumatology",
        "subtitle": "Advanced Arthritis, Joint &",
        "intro": "Autoimmune Disease Care Healthy Joints. Active Life. Are Joint Pain or Autoimmune Disorders Limiting Your Daily Activities? Persistent joint pain, swelling, stiffness, or muscle aches can make everyday tasks difficult and affect your quality of life. Whether you're living with arthritis, autoimmune diseases, gout, osteoporosis, or chronic musculoskeletal pain, early diagnosis and expert rheumatology care can help relieve symptoms, protect your joints, and improve your mobility. Our experienced rheumatologists at Dr Buddies Health Hub provide comprehensive diagnosis and treatment for a wide range of arthritis, autoimmune diseases, inflammatory joint disorders, and",
        "services": [
            "Arthritis Diagnosis & Treatment",
            "Rheumatoid Arthritis Management",
            "Osteoarthritis Care",
            "Autoimmune Disease Treatment",
            "Lupus (SLE) Management",
            "Ankylosing Spondylitis Treatment",
            "Gout & Crystal Arthritis Care",
            "Osteoporosis Evaluation & Management",
            "Joint Injection Therapy",
            "Long-Term Rheumatology Follow-up"
        ],
        "diagnostics": [
            "care. From osteoarthritis and rheumatoid arthritis to lupus, gout, ankylosing spondylitis, and osteoporosis, we focus on delivering personalized treatment plans that reduce pain, control inflammation, and support long-term joint health. Our goal is to help you stay active, independent, and pain-free through compassionate care, early intervention, and comprehensive disease management.",
            "Rheumatoid Factor (RF) Testing",
            "Anti-CCP Antibody Testing",
            "ANA Profile",
            "ESR & CRP Testing",
            "Joint Ultrasound",
            "Digital X-ray",
            "MRI Scan",
            "Bone Density Test (DEXA Scan)",
            "Joint Fluid Analysis",
            "Comprehensive Rheumatology Assessment Modern laboratory investigations and imaging facilities for accurate diagnosis, early detection, and effective disease management. Comprehensive Rheumatology Care Complete care for arthritis, autoimmune diseases, osteoporosis, gout, and chronic joint disorders under one roof. Compassionate Care We provide patient-centered care with expert guidance, clear communication, and continuous support to help you manage your condition and maintain a better quality of life. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Rheumatologists",
            "Expert diagnosis and treatment for arthritis, autoimmune diseases, inflammatory disorders, and",
            "complex rheumatic conditions.",
            "Personalized Treatment",
            "Individualized care plans tailored to your condition, symptoms, lifestyle, and long-term health goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a rheumatologist?",
                "answer": "You should consult a rheumatologist if you have persistent joint pain, swelling, morning stiffness, muscle pain, unexplained fatigue, or symptoms of an autoimmune disease."
            },
            {
                "question": "What conditions do rheumatologists treat?",
                "answer": "We diagnose and treat rheumatoid arthritis, osteoarthritis, lupus, ankylosing spondylitis, gout, osteoporosis, vasculitis, connective tissue diseases, and other autoimmune and inflammatory disorders."
            },
            {
                "question": "Can arthritis be treated without surgery?",
                "answer": "Yes. Many forms of arthritis can be effectively managed with medications, lifestyle changes, physiotherapy, joint injections, and regular follow-up. Surgery is only considered when necessary."
            },
            {
                "question": "What is rheumatoid arthritis?",
                "answer": "Rheumatoid arthritis is an autoimmune disease in which the immune system mistakenly attacks the joints, causing pain, swelling, stiffness, and inflammation. Early diagnosis and treatment can help prevent joint damage."
            },
            {
                "question": "Can autoimmune diseases be managed?",
                "answer": "Yes. Although many autoimmune diseases are chronic, they can often be effectively managed with early diagnosis, appropriate medications, lifestyle modifications, and ongoing medical care to control symptoms and improve quality of life."
            }
        ],
        "iconClass": "fa-solid fa-hand",
        "svg": "iconbg7",
        "doctor": "Dr. Chandhu A S"
    },
    "Spine Surgery": {
        "title": "Spine Surgery",
        "subtitle": "Advanced Spine Care & Minimally",
        "intro": "Invasive Spine Surgery Stand Tall. Live Pain-Free. Is Back or Neck Pain Affecting Your Daily Life? Persistent back pain, neck pain, or spine-related problems can limit your mobility, affect your work, and reduce your quality of life. Whether you're experiencing a slipped disc, sciatica, spinal stenosis, spinal injury, or chronic spine pain, early diagnosis and expert spine care can help you regain movement and return to an active lifestyle. Our experienced spine surgeons at Dr Buddies Health Hub provide comprehensive diagnosis and",
        "services": [
            "Spine Consultation & Evaluation",
            "Minimally Invasive Spine Surgery",
            "Slipped Disc (Herniated Disc) Treatment",
            "Cervical & Lumbar Spine Surgery",
            "Sciatica Treatment",
            "Spinal Stenosis Management",
            "Spine Trauma & Fracture Care",
            "Spine Tumor Evaluation",
            "Post-Surgical Spine Rehabilitation",
            "Non-Surgical Spine Care"
        ],
        "diagnostics": [
            "based surgical care. From non-surgical spine treatments to minimally invasive spine surgery and complex spinal procedures, we focus on delivering personalized care that relieves pain, restores function, and supports long-term spinal health. We believe that surgery is recommended only when necessary. Whenever possible, our specialists begin with conservative treatment options to help patients recover safely and effectively.",
            "Digital X-ray",
            "MRI Scan",
            "CT Scan",
            "Spine Imaging",
            "Nerve Conduction Studies (where indicated)",
            "Electromyography (EMG)",
            "Bone Density Test (DEXA Scan)",
            "Neurological Assessment",
            "Laboratory Investigations",
            "Comprehensive Spine Evaluation Modern imaging and diagnostic facilities for accurate evaluation, early diagnosis, and effective treatment. Comprehensive Spine Care Complete spine care from diagnosis and conservative treatment to advanced surgery, rehabilitation, and long-term follow-up. Compassionate Care We provide patient-centered care with expert guidance, clear communication, and continuous support throughout your treatment and recovery journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Spine Surgeons",
            "Expert diagnosis and treatment for common and complex spine conditions using advanced surgical",
            "and non-surgical techniques.",
            "Personalized Treatment",
            "Individualized treatment plans designed according to your spinal condition, symptoms, lifestyle, and",
            "recovery goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a spine surgeon?",
                "answer": "You should consult a spine specialist if you have persistent back pain, neck pain, sciatica, numbness, tingling, muscle weakness, difficulty walking, or spine pain that does not improve with medication or physiotherapy."
            },
            {
                "question": "Do all spine problems require surgery?",
                "answer": "No. Many spine conditions can be successfully managed with medication, physiotherapy, lifestyle modifications, pain management, and rehabilitation. Surgery is recommended only when conservative treatments are not effective or when the condition requires surgical intervention."
            },
            {
                "question": "What conditions do spine surgeons treat?",
                "answer": "We diagnose and treat slipped discs, spinal stenosis, sciatica, spinal fractures, cervical and lumbar spondylosis, spine tumors, scoliosis, spinal deformities, and other spinal disorders."
            },
            {
                "question": "Do you perform minimally invasive spine surgery?",
                "answer": "Yes. Whenever appropriate, we offer minimally invasive spine surgery, which may result in smaller incisions, less pain, shorter hospital stays, and faster recovery compared with traditional open surgery."
            },
            {
                "question": "How long does recovery take after spine surgery?",
                "answer": "Recovery depends on the type of surgery, your overall health, and your rehabilitation program. Our specialists provide personalized recovery plans and long-term follow-up to help you regain strength, mobility, and confidence."
            }
        ],
        "iconClass": "fa-solid fa-person-cane",
        "svg": "iconbg3",
        "doctor": "Dr. Jipin Gopi"
    },
    "Sports Medicine": {
        "title": "Sports Medicine",
        "subtitle": "Advanced Sports Injury Care &",
        "intro": "Rehabilitation Recover Stronger. Perform Better. Is Pain or Injury Keeping You Away from the Sport You Love? Sports injuries and musculoskeletal problems can affect your performance, mobility, and quality of life. Whether you're a professional athlete, fitness enthusiast, or someone with an active lifestyle, injuries such as ligament tears, muscle strains, joint pain, or fractures require expert evaluation and timely treatment for a safe recovery. Our experienced Sports Medicine specialists at Dr Buddies Health Hub provide comprehensive diagnosis, treatment, rehabilitation, and injury prevention for a wide range of sports-related",
        "services": [
            "Sports Injury Evaluation",
            "Ligament & Tendon Injury Treatment",
            "Muscle Strain & Tear Management",
            "Joint Pain & Injury Care",
            "Arthroscopic (Keyhole) Surgery",
            "Sports Rehabilitation",
            "Fracture & Trauma Management",
            "Performance Enhancement Programs",
            "Injury Prevention & Conditioning",
            "Return-to-Sport Assessment"
        ],
        "diagnostics": [
            "help patients recover faster, regain strength, improve mobility, and safely return to sports and daily activities. From acute sports injuries to chronic overuse conditions, our personalized treatment plans are designed to reduce pain, restore function, and help you achieve your performance and recovery goals.",
            "Digital X-ray",
            "MRI Scan",
            "CT Scan",
            "Musculoskeletal Ultrasound",
            "Sports Injury Assessment",
            "Joint Stability Evaluation",
            "Functional Movement Analysis",
            "Performance Assessment",
            "Laboratory Investigations",
            "Pre-Return-to-Sport Evaluation State-of-the-art imaging and diagnostic facilities for accurate diagnosis and effective treatment. Comprehensive Sports Care Complete care from injury assessment and treatment to rehabilitation, performance improvement, and safe return to sports. Compassionate Care We support you throughout your recovery journey with expert guidance, rehabilitation, and ongoing care. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Sports Medicine Specialists",
            "Expert diagnosis and treatment for sports injuries, joint conditions, muscle injuries, and rehabilitation",
            "using modern medical techniques.",
            "Personalized Treatment",
            "Individualized recovery plans tailored to your injury, activity level, and performance goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a Sports Medicine specialist?",
                "answer": "You should consult a Sports Medicine specialist if you have a sports injury, joint pain, muscle strain, ligament injury, recurring pain during exercise, or difficulty returning to physical activity after an injury."
            },
            {
                "question": "Do all sports injuries require surgery?",
                "answer": "No. Many sports injuries can be effectively treated with medication, physiotherapy, rehabilitation, injections, and lifestyle modifications. Surgery is recommended only when necessary."
            },
            {
                "question": "What injuries do Sports Medicine specialists treat?",
                "answer": "We treat ligament injuries, ACL tears, meniscus injuries, muscle strains, tendon injuries, fractures, shoulder injuries, ankle sprains, tennis elbow, runner's knee, and other sports-related conditions."
            },
            {
                "question": "How long does sports injury rehabilitation take?",
                "answer": "Recovery depends on the type and severity of the injury. Our specialists create personalized rehabilitation programs to help you recover safely and return to sports as soon as possible."
            },
            {
                "question": "Can Sports Medicine help prevent injuries?",
                "answer": "Yes. We provide injury prevention programs, strength and conditioning guidance, movement assessments, and performance training to reduce the risk of future injuries and improve athletic performance."
            }
        ],
        "iconClass": "fa-solid fa-person-running",
        "svg": "iconbg4",
        "doctor": "Dr. Abrar Hassan"
    },
    "Urology": {
        "title": "Urology",
        "subtitle": "Advanced Urinary & Men's Health Care",
        "intro": "Better Urinary Health. Better Quality of Life. Are Urinary Problems Affecting Your Daily Routine? Urinary and reproductive health conditions can significantly impact your comfort, confidence, and overall well-being. Whether you're experiencing kidney stones, urinary tract infections (UTIs), prostate enlargement, difficulty urinating, bladder problems, or male reproductive health concerns, early diagnosis and expert urological care can help restore your health and improve your quality of life. Our experienced urologists at Dr Buddies Health Hub provide comprehensive diagnosis and treatment for a wide range of urinary tract and male reproductive system disorders using advanced diagnostic technology and evidence-based medical care. From common conditions such as kidney stones, urinary infections, and prostate disorders to complex urological diseases and minimally invasive procedures, we focus on delivering personalized treatment that promotes faster recovery and long-term urinary health.",
        "services": [
            "Kidney Stone Evaluation & Treatment",
            "Urinary Tract Infection (UTI) Management",
            "Prostate Disease Diagnosis & Treatment",
            "Bladder Disorder Management",
            "Men's Health Consultation",
            "Erectile Dysfunction Treatment",
            "Male Infertility Evaluation",
            "Minimally Invasive Urological Procedures",
            "Pediatric Urology Services",
            "Preventive Urological Health Screening"
        ],
        "diagnostics": [
            "Urine Analysis",
            "Kidney Function Tests",
            "Ultrasound Scan",
            "CT Scan",
            "X-ray Evaluation",
            "Uroflowmetry",
            "Cystoscopy (where indicated)",
            "PSA (Prostate-Specific Antigen) Testing",
            "Laboratory Investigations",
            "Comprehensive Urological Assessment Modern diagnostic facilities for accurate evaluation, early diagnosis, and effective treatment. Comprehensive Urological Care Complete care for kidney stones, prostate disorders, bladder diseases, urinary infections, and men's health under one roof. Compassionate Care We provide confidential, patient-centered care with expert guidance and continuous support throughout your treatment journey. Convenient Location Easily accessible in Calicut (Kozhikode), proudly serving patients from Malappuram, Kannur, Wayanad, Kasaragod, Palakkad, Thrissur, and across North Kerala."
        ],
        "why_choose": [
            "Experienced Urologists",
            "Expert diagnosis and treatment for common and complex urinary tract and male reproductive health",
            "conditions.",
            "Personalized Treatment",
            "Individualized care plans designed according to your health condition, lifestyle, and treatment goals."
        ],
        "faqs": [
            {
                "question": "When should I consult a urologist?",
                "answer": "You should consult a urologist if you experience frequent urination, difficulty passing urine, blood in the urine, kidney stone symptoms, recurrent urinary tract infections, prostate problems, or male reproductive health concerns."
            },
            {
                "question": "What conditions do urologists treat?",
                "answer": "We diagnose and treat kidney stones, urinary tract infections, enlarged prostate (BPH), bladder disorders, urinary incontinence, erectile dysfunction, male infertility, and other urinary and reproductive system conditions."
            },
            {
                "question": "Do you treat kidney stones without major surgery?",
                "answer": "Yes. Depending on the size and location of the stone, many kidney stones can be managed with medication or minimally invasive procedures. Our urologists will recommend the most suitable treatment."
            },
            {
                "question": "Do you provide treatment for prostate enlargement?",
                "answer": "Yes. We offer comprehensive diagnosis and treatment for enlarged prostate (BPH) and other prostate-related conditions using medical and minimally invasive treatment options."
            },
            {
                "question": "Can urinary tract infections (UTIs) be prevented?",
                "answer": "Many UTIs can be prevented by staying well hydrated, maintaining good personal hygiene, managing underlying health conditions, and seeking timely medical care when symptoms develop."
            }
        ],
        "iconClass": "fa-solid fa-mars",
        "svg": "iconbg7",
        "doctor": "Dr. Jithin Lal M"
    }
};
