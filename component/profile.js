import React, { Component } from 'react';
import { Text, ScrollView, View, TextInput } from 'react-native';
import { FormLabel, FormInput, Divider } from 'react-native-elements';

// You can import from local files

export default class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            tempatlahir: '',
            tanggallahir: '',
        };
    }
    render() {
        return (
            <View>

                <Text style={{ textAlign: "center", marginTop: 20 }}>Firstname</Text>
                <TextInput
                    style={{
                        height: 35, borderColor: 'skyblue', borderWidth: 1, borderRadius: 5,
                        marginHorizontal: 40
                    }}
                    onChangeText={(firstname) => this.setState({ firstname })}
                />

                <Text style={{ textAlign: "center", marginTop: 20 }}>Lastname</Text>
                <TextInput
                    style={{
                        height: 35, borderColor: 'skyblue', borderWidth: 1, borderRadius: 5,
                        marginHorizontal: 40
                    }}
                    onChangeText={(lastname) => this.setState({ lastname })}
                />

                <Text style={{ textAlign: "center", marginTop: 20 }}>Tempat Lahir</Text>
                <TextInput
                    style={{
                        height: 35, borderColor: 'skyblue', borderWidth: 1, borderRadius: 5,
                        marginHorizontal: 40
                    }}
                    onChangeText={(tempatlahir) => this.setState({ tempatlahir })}
                />

                <Text style={{ textAlign: "center", marginTop: 20 }}>Tanggal Lahir</Text>
                <TextInput
                    style={{
                        height: 35, borderColor: 'skyblue', borderWidth: 1, borderRadius: 5,
                        marginHorizontal: 40
                    }}
                    onChangeText={(tanggallahir) => this.setState({ tanggallahir })}
                />

                <View style={{marginTop: 20}}>
                    <FormLabel>Nama: {this.state.firstname} {this.state.lastname}</FormLabel>
                    <FormLabel>Tempat Tanggal Lahir: {this.state.tempatlahir}, {this.state.tanggallahir}</FormLabel>
                </View>

            </View>
        );
    }
}


