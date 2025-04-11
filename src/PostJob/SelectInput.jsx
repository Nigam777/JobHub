import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function SelectInput({label,placeholder,options}) {

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState("");

  const option= options.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
         withAsterisk
          label={label}
          component="button"
          type="button"
          pointer
          
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          
          onFocus={() => combobox.toggleDropdown()}
          value={value}
        
          
        >
          {value || <Input.Placeholder>{placeholder}</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={200} type='scroll' >
            {option}
           
          </ScrollArea.Autosize>
        
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default SelectInput