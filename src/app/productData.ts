export interface ProductData {
  variableName: string;
  name: string;
  inputTypeCode: string;
  options: any;
  displayValue: any;
}

export const productData = [
  {
    variableName: 'addOn',
    name: 'Add on',
    inputTypeCode: 'MultiSelectMenu',
    options: [
      {
        displayValue: 'La League VR',
        value: 'Supremo Laser 5G',
      },
      {
        displayValue: 'Supremo Laser',
        value: 'Supremo Laser',
      },
      {
        displayValue: 'Home Solutions',
        value: 'Home Solutions',
      },
    ],
  },
  {
    variableName: 'model_Laser',
    name: 'Model',
    inputTypeCode: 'SingleSelectMenu',
    options: [
      {
        displayValue: 'Laser 5G',
        value: 'Supremo Laser 5G',
      },
      {
        displayValue: 'Laser LTE',
        value: 'Supremo Laser LTE',
      },
    ],
  },
  {
    variableName: 'color_Laser',
    name: 'Color',
    inputTypeCode: 'SingleSelectMenu',
    options: [
      {
        displayValue: 'Red',
        value: 'Red',
      },
      {
        displayValue: 'Black',
        value: 'Black',
      },
    ],
  },
  {
    variableName: 'storage_laser',
    name: 'Storage',
    inputTypeCode: 'SingleSelectMenu',
    options: [
      {
        displayValue: '128GB',
        value: '128GB',
      },
      {
        displayValue: '256GB',
        value: '256GB',
      },
    ],
  },
  {
    variableName: 'brand_laser',
    name: 'Brand',
    inputTypeCode: 'SingleSelectMenu',
    options: [
      {
        displayValue: 'Supremo Laser',
        value: 'Supremo Laser',
      },
    ],
  },
  {
    variableName: 'paymentOption_Laser',
    name: 'Payment Option',
    inputTypeCode: 'SingleSelectMenu',
    options: [
      {
        displayValue: 'Finance',
        value: 'Finance',
      },
      {
        displayValue: 'Full',
        value: 'Full',
      },
    ],
  },
  {
    variableName: 'addOnForStreamingAndGaming',
    name: 'AddOn for Streaming and Gaming',
    inputTypeCode: 'Boolean',
    options: [],
  },
  {
    variableName: 'addOnForLowLatencyServices',
    name: 'AddOn for Low Latency Services',
    inputTypeCode: 'Boolean',
    options: [],
  },
];
