import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updatePatient } from '../slices/patientSlice';

const PatientDetailScreen = ({ route }) => {
  const { patientId } = route.params;
  const dispatch = useDispatch();
  const patient = useSelector((state) =>
    state.patients.list.find((p) => p.id === patientId)
  );

  const [vitals, setVitals] = useState(patient.vitals);
  const [heartRate, setHeartRate] = useState(patient.heartRate);
  const [contractions, setContractions] = useState(patient.contractions);
  const [interventions, setInterventions] = useState(patient.interventions);

  const handleSave = () => {
    dispatch(
      updatePatient({
        id: patientId,
        vitals,
        heartRate,
        contractions,
        interventions,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Monitoring</Text>
      <TextInput
        style={styles.input}
        placeholder="Maternal Vitals"
        value={vitals}
        onChangeText={setVitals}
      />
      <TextInput
        style={styles.input}
        placeholder="Fetal Heart Rate"
        value={heartRate}
        onChangeText={setHeartRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Contractions"
        value={contractions}
        onChangeText={setContractions}
      />
      <TextInput
        style={styles.input}
        placeholder="Interventions"
        value={interventions}
        onChangeText={setInterventions}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
});

export default PatientDetailScreen;
