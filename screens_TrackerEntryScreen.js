// screens/TrackerEntryScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { dhis2 } from "../services/dhis2";

export default function TrackerEntryScreen() {
  const [tei, setTei] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    setSaving(true);
    try {
      // Example: Child Programme on DHIS2 demo
      const program = "IpHINAT79UW"; // Child Programme
      const orgUnit = "DiszpKrYNg8"; // Ngelehun CHC

      // 1. Create a new Tracked Entity Instance
      const teiPayload = {
        trackedEntityType: "nEenWmSyUEp", // Person
        orgUnit,
        attributes: [
          { attribute: "w75KJ2mc4zz", value: tei.firstName },
          { attribute: "zDhUuAYrxNC", value: tei.lastName },
          { attribute: "cejWyOfXge6", value: tei.gender },
          { attribute: "oZg33kd9taw", value: tei.dob },
        ],
      };

      const teiRes = await dhis2.post("/trackedEntityInstances", teiPayload);
      const teiId = teiRes.data.response.reference;

      // 2. Enroll TEI into the program
      await dhis2.post("/enrollments", {
        trackedEntityInstance: teiId,
        orgUnit,
        program,
        enrollmentDate: new Date().toISOString().split("T")[0],
        incidentDate: new Date().toISOString().split("T")[0],
      });

      alert("Tracker data saved!");
    } catch (e) {
      console.error(e);
      alert("Failed to save tracker entry.");
    }
    setSaving(false);
  };

  return (
    <ScrollView className="p-4">
      <Text className="text-lg font-bold mb-4">Tracker Entry – Child Programme</Text>
      <TextInput
        placeholder="First Name"
        className="border p-2 mb-2 rounded"
        value={tei.firstName}
        onChangeText={(t) => setTei({ ...tei, firstName: t })}
      />
      <TextInput
        placeholder="Last Name"
        className="border p-2 mb-2 rounded"
        value={tei.lastName}
        onChangeText={(t) => setTei({ ...tei, lastName: t })}
      />
      <TextInput
        placeholder="Gender (M/F)"
        className="border p-2 mb-2 rounded"
        value={tei.gender}
        onChangeText={(t) => setTei({ ...tei, gender: t })}
      />
      <TextInput
        placeholder="Date of Birth (YYYY-MM-DD)"
        className="border p-2 mb-2 rounded"
        value={tei.dob}
        onChangeText={(t) => setTei({ ...tei, dob: t })}
      />

      <Button title={saving ? "Saving..." : "Submit"} onPress={handleSubmit} disabled={saving} />
    </ScrollView>
  );
}