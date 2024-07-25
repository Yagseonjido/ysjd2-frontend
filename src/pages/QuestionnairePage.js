import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Step1 from '../components/CheckupStep1';
import Step2 from '../components/CheckupStep2';
import Step3 from '../components/CheckupStep3.js';
import Step4 from '../components/CheckupStep4.js';

const QuestionnairePage = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    const payload = {
      name: formData.name,
      birthdate: `${formData.birthdate}`,
      genderNumber: parseInt(formData.genderNumber, 10),
      weight: formData.weight,
      height: formData.height,
      bloodPressure: `${formData.bloodPressureSystolic}/${formData.bloodPressureDiastolic}`,
      pastDiseases: formData.pastDiseases, 
      currentMedications: formData.currentMedications,
      allergies: formData.allergies,
      familyHistory: formData.familyHistory,
      symptoms: formData.symptoms,
      onset: formData.onset, 
      painLevel: formData.painLevel,
    };

    console.log("Submitting data:", payload);
    
    // 서버로 데이터 전송 로직
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      if (response.ok) {
        // 일단 보내버려... 
      }
    });
  };

  return (
    <Routes>
      <Route path="step1" element={<Step1 formData={formData} setFormData={setFormData} />} />
      <Route path="step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
      <Route path="step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
      <Route path="step4" element={<Step4 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />} />
    </Routes>
  );
};

export default QuestionnairePage;
