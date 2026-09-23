export const CATEGORIES = [
  'Fever Test', 'Full Body', 'Dengue Test', 'Heart Test',
  'HIV Test', 'Pregnancy Test', 'Hormone Test', 'Allergy Test',
  'Diabetes Test', 'Kidney Test', 'Liver Test', 'Thyroid Test'
];

export const TESTS_DATA: Record<string, string[]> = {
  'Fever Test': [
    'Monsoon Fever Panel Test', 'Widal Test', 'CRP Test',
    'Dengue Test', 'Max Fever Panel Basic Test', 'SGPT Test',
    'Max Fever Panel Comprehensive ...', 'Chikungunya PCR Test', 'Monsoon Fever Panel With Chikun...',
    'Typhidot Test', 'Dengue Fever Panel (Elisa) Test', 'H1N1 Test',
    'Malaria Antigen Test', 'Urine Routine Test', 'SGOT Test',
    'Max Fever Panel Advance Test', 'LFT Test', 'Malaria Test'
  ]
};

// Fill missing categories with dummy data
CATEGORIES.forEach(cat => {
  if (!TESTS_DATA[cat]) {
    TESTS_DATA[cat] = ['Standard ' + cat, 'Advanced ' + cat, 'Comprehensive ' + cat];
  }
});
