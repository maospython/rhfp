import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPatients } from '../slices/patientSlice';
import { getPatients } from '../db';

const PatientListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.list);

  useEffect(() => {
    getPatients((patients) => {
      dispatch(setPatients(patients));
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('PatientDetail', { patientId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PatientListScreen;
