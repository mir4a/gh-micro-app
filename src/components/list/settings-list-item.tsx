import React from 'react';
import { ListItem, Text, View } from 'tamagui';

interface SettingsListItemProps {
  label: string;
  value?: string | null;
}

const SettingsListItem: React.FC<SettingsListItemProps> = ({ label, value }) => {
  return (
    <ListItem>
      <View>
        <Text>{label}</Text>
      </View>
      <View>
        <Text>{value}</Text>
      </View>
    </ListItem>
  );
};

export default SettingsListItem;