import React from 'react';
import { Text, View } from 'react-native';
import { Accordion, borderRadius, Button, Checkbox, Dialog, padding, Switch } from 'vital-react-native';

const Index = () => {
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    return (
        <View style={[padding.p5, { flex: 1, gap: 10 }]}>
            {/*<Text>Dashboard</Text>*/}
            <Accordion
                title={<Text>Dashboard Component</Text>}
                showIcon
                // open={true}
                // styles={{
                //     style: undefined,
                //     titleStyle: undefined,
                //     bodyStyle: undefined,
                // }}
            >
                <Text>Hello World</Text>
            </Accordion>
            <Checkbox
                size={20}
                borderColor={"#000000"}
                backgroundColor={"#BCBCBC"}
                fill={true}
                checkColor={"red"}
                checked={checked}
                onPress={() => {
                    setChecked(!checked);
                }}
            >
                <View>
                    <Text>CheckBox</Text>
                </View>
            </Checkbox>
            <Dialog
                visible={open}
                onClose={() => {}}
                // style={}
                onBackDropPress={() => setOpen(false)}
                header={true}
                headerColor={"red"}
                title={<Text>Hello World</Text>}
                onRequestClose={() => setOpen(false)}
                bodyColor={"white"}
                onRequestOpen={() => setOpen(true)}
            >
                <View>
                    <Text>Ram Ram</Text>
                </View>
            </Dialog>
            <Button
                borderRadius={borderRadius.br5}
                padding={padding.p4}
                bordered={true}
                backgroundColor={"#FFFFFF"}
                onPress={() => {
                    setOpen(!open);
                }}
            >
                <Text>Dialog</Text>
            </Button>

            <Switch
                activeTrackColors={["#6AA5FF", "#E02BF0"]}
                // start={}
                // end={}
                // thumbStyle={}
                defaultValue={true}
                value={false}
                // onChange={() => {}}
                // isDark={true}
                // disabled={true}
            />
        </View>
    );
};

export default Index;
