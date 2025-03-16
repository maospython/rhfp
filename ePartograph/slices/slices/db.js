import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'ePartographDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  }
);

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        vitals TEXT,
        heartRate TEXT,
        contractions TEXT,
        interventions TEXT
      )`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table', error);
      }
    );
  });
};

export const insertPatient = (patient) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO patients (name, vitals, heartRate, contractions, interventions) VALUES (?, ?, ?, ?, ?)`,
      [patient.name, patient.vitals, patient.heartRate, patient.contractions, patient.interventions],
      (tx, results) => {
        console.log('Patient added successfully');
      },
      error => {
        console.log('Error adding patient', error);
      }
    );
  });
};

export const getPatients = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM patients`,
      [],
      (tx, results) => {
        let patients = [];
        for (let i = 0; i < results.rows.length; i++) {
          patients.push(results.rows.item(i));
        }
        callback(patients);
      },
      error => {
        console.log('Error fetching patients', error);
      }
    );
  });
};
