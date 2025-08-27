import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppProvider, Input as VitalInput } from "vital-react-native";

const Input = () => {
    const [basicValue, setBasicValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [multilineValue, setMultilineValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [amountValue, setAmountValue] = useState("");
    const [errorValue, setErrorValue] = useState("invalid input");
    const [successValue, setSuccessValue] = useState("valid input");

    const handleSubmit = () => {
        Alert.alert("Form Submitted", "All inputs processed successfully!");
    };

    return (
        <AppProvider>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Input Component Variants</Text>

                {/* Basic Input */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Basic Input</Text>
                    <VitalInput
                        placeholder={{
                            text: "Enter your name",
                            color: "#666"
                        }}
                        value={basicValue}
                        onChangeText={setBasicValue}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#007AFF",
                                radius: { borderRadius: 8 }
                            }
                        }}
                    />
                </View>

                {/* Floating Placeholder */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Floating Placeholder</Text>
                    <VitalInput
                        placeholder={{
                            text: "Email address",
                            color: "#666",
                            floating: true,
                            floatingProps: {
                                fontSize: 16,
                                activeFontSize: 12,
                                textStyle: { fontWeight: "500" }
                            }
                        }}
                        value={emailValue}
                        onChangeText={setEmailValue}
                        keyboardType="email-address"
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#34C759",
                                radius: { borderRadius: 12 }
                            }
                        }}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Password Input</Text>
                    <VitalInput
                        placeholder={{
                            text: "Enter password",
                            color: "#666",
                            floating: true
                        }}
                        value={passwordValue}
                        onChangeText={setPasswordValue}
                        secureTextEntry={true}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#FF3B30",
                                radius: { borderRadius: 8 }
                            }
                        }}
                    />
                </View>

                {/* Input with Left Addon */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Input with Left Addon</Text>
                    <VitalInput
                        placeholder={{
                            text: "Search products...",
                            color: "#666"
                        }}
                        value={searchValue}
                        onChangeText={setSearchValue}
                        addons={{
                            left: <Text style={styles.addonText}>🔍</Text>
                        }}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#007AFF",
                                radius: { borderRadius: 20 }
                            }
                        }}
                    />
                </View>

                {/* Input with Right Addon */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Input with Right Addon</Text>
                    <VitalInput
                        placeholder={{
                            text: "Enter amount",
                            color: "#666"
                        }}
                        value={amountValue}
                        onChangeText={setAmountValue}
                        keyboardType="numeric"
                        addons={{
                            right: <Text style={styles.addonText}>USD</Text>
                        }}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#FF9500",
                                radius: { borderRadius: 8 }
                            }
                        }}
                    />
                </View>

                {/* Input with Both Addons */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Input with Both Addons</Text>
                    <VitalInput
                        placeholder={{
                            text: "Phone number",
                            color: "#666"
                        }}
                        value={phoneValue}
                        onChangeText={setPhoneValue}
                        keyboardType="phone-pad"
                        addons={{
                            left: <Text style={styles.addonText}>📞</Text>,
                            right: <Text style={styles.addonText}>Call</Text>
                        }}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#5856D6",
                                radius: { borderRadius: 8 }
                            }
                        }}
                    />
                </View>

                {/* Multiline Input */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Multiline Input</Text>
                    <VitalInput
                        placeholder={{
                            text: "Enter your message...",
                            color: "#666"
                        }}
                        value={multilineValue}
                        onChangeText={setMultilineValue}
                        multiline={true}
                        numberOfLines={4}
                        styles={{
                            wrapper: styles.inputWrapper,
                            input: { minHeight: 100, alignItems: "flex-start" },
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#007AFF",
                                radius: { borderRadius: 8 }
                            }
                        }}
                    />
                </View>

                {/* Error State */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Error State</Text>
                    <VitalInput
                        placeholder={{
                            text: "Enter valid input",
                            color: "#666"
                        }}
                        value={errorValue}
                        onChangeText={setErrorValue}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#FF3B30",
                                onFocusColor: "#FF3B30",
                                radius: { borderRadius: 8 }
                            }
                        }}
                        feedback={{
                            node: <Text style={styles.errorText}>This field is required</Text>
                        }}
                    />
                </View>

                {/* Success State */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Success State</Text>
                    <VitalInput
                        placeholder={{
                            text: "Enter valid input",
                            color: "#666"
                        }}
                        value={successValue}
                        onChangeText={setSuccessValue}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#34C759",
                                onFocusColor: "#34C759",
                                radius: { borderRadius: 8 }
                            }
                        }}
                        feedback={{
                            node: <Text style={styles.successText}>✓ Input is valid</Text>
                        }}
                    />
                </View>

                {/* Custom Background */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Custom Background</Text>
                    <VitalInput
                        placeholder={{
                            text: "Custom background input",
                            color: "#666"
                        }}
                        styles={{
                            wrapper: styles.inputWrapper,
                            background: {
                                color: "#f8f9fa",
                                onFocusColor: "#e3f2fd"
                            },
                            border: {
                                color: "#dee2e6",
                                onFocusColor: "#2196F3",
                                radius: { borderRadius: 8 }
                            }
                        }}
                    />
                </View>

                {/* Rounded Input */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Rounded Input</Text>
                    <VitalInput
                        placeholder={{
                            text: "Rounded corners",
                            color: "#666"
                        }}
                        styles={{
                            wrapper: styles.inputWrapper,
                            border: {
                                color: "#e0e0e0",
                                onFocusColor: "#007AFF",
                                radius: { borderRadius: 25 }
                            }
                        }}
                    />
                </View>

                {/* Disabled Input */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Disabled Input</Text>
                    <VitalInput
                        placeholder={{
                            text: "Disabled input",
                            color: "#999"
                        }}
                        editable={false}
                        value="This input is disabled"
                        styles={{
                            wrapper: styles.inputWrapper,
                            background: {
                                color: "#f5f5f5"
                            },
                            border: {
                                color: "#e0e0e0",
                                radius: { borderRadius: 8 }
                            }
                        }}
                    />
                </View>

                {/* Submit Button */}
                <View style={styles.section}>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Submit Form</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomSpacing} />
            </ScrollView>
        </AppProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: 30,
        textAlign: "center"
    },
    section: {
        marginBottom: 25
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 10
    },
    inputWrapper: {
        marginBottom: 5
    },
    addonText: {
        fontSize: 16,
        color: "#666",
        fontWeight: "500"
    },
    errorText: {
        color: "#FF3B30",
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5
    },
    successText: {
        color: "#34C759",
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5
    },
    submitButton: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 8,
        marginTop: 20
    },
    submitButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600"
    },
    bottomSpacing: {
        height: 50
    }
});

export default Input;