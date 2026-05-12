export const reportData = {
  title: "EJMA 10th Edition Report",

  company: {
    name: "RATNAFLEX Engineering Pvt. Ltd.",
    logo: "/assets/logo.png",
  },

  contactDetails: [
    {
      label: "Customer",
      value: "Galiakotwala Engineering Company Pvt. Ltd.",
    },

    {
      label: "Project Name",
      value: "Technical Re-Equipment Production & Technological Area",
    },

    {
      label: "Project Desc.",
      value: 'SK-20 OPO "Sulfuric Acid Production Site"',
    },

    {
      label: "End User",
      value: 'Charitable Foundation JSC "Apatit" SKP SK-20/1',
    },

    {
      label: "Consultant",
      value: "Galiakotwala Technical Services",
    },

    {
      label: "PMC",
      value: "Chem. composition%: 4.76 - SO2, 7.3 - SO3, 5.96 - O2; 81.97 - N2",
    },

    {
      leftLabel: "Bellows Type",
      leftValue: "Single | Unreinforced",
      rightLabel: "Drawing No",
      rightValue: "REPL-DRG-0191-001-R0",
    },

    {
      leftLabel: "Item No",
      leftValue: "Gas Duct: 2320x10 - 12X18H10T",
      rightLabel: "Calculation No",
      rightValue: "REPL/2024/2057-R0",
    },

    {
      leftLabel: "Bellows No",
      leftValue: "2320ID-UEJ-100-WWL",
      rightLabel: "Calculation By",
      rightValue: "Bhavin Siddhpura",
    },
  ],

  designParameters: [
    {
      left: {
        label: "Internal Design temperature",
        symbol: "T",
        value: "620",
        unit: "°C",
      },

      right: {
        label: "Bellows Heat Treatment",
        value: "No",
      },
    },

    {
      left: {
        label: "Internal Design Pressure",
        symbol: "P",
        value: "0.1",
        unit: "MPa",
      },

      right: {
        label: "Bellows Preset",
        value: "No",
      },
    },

    {
      left: {
        label: "Add. Fatigue Safety Factor",
        symbol: "f",
        value: "1",
        unit: "",
      },

      right: {
        label: "Bellows Weld Factor",
        symbol: "Cwb",
        value: "0.7",
      },
    },

    {
      left: {
        label: "Required Fatigue Cycles",
        symbol: "",
        value: "1000",
        unit: "Nos",
      },

      right: {
        label: "Collar Weld Factor",
        symbol: "Cwc",
        value: "0.7",
      },
    },
  ],

  thermalMovement: [
    {
      label: "Axial Movement",
      axis: "x",

      condition1: {
        value: "125",
        type: "Extension",
      },

      condition2: {
        value: "-0",
        type: "Compression",
      },

      unit: "mm",
    },

    {
      label: "Lateral Movement",
      axis: "y",

      condition1: {
        value: "0",
        type: "In Plan",
      },

      condition2: {
        value: "0",
        type: "Out Plan",
      },

      unit: "mm",
    },

    {
      label: "Angular Movement",
      axis: "θ",

      condition1: {
        value: "0",
        type: "",
      },

      condition2: {
        value: "0",
        type: "",
      },

      unit: "Degree",
    },
  ],

  dimensions: [
    {
      leftLabel: "Bellows ID",
      leftSymbol: "",
      leftValue: "2320",
      leftUnit: "mm",

      rightLabel: "Tangent Length",
      rightSymbol: "Lt",
      rightValue: "25",
      rightUnit: "mm",
    },

    {
      leftLabel: "Bellows Outside Diameter",
      leftSymbol: "",
      leftValue: "2422.54",
      leftUnit: "mm",

      rightLabel: "Collar Length",
      rightSymbol: "Lc",
      rightValue: "0",
      rightUnit: "mm",
    },

    {
      leftLabel: "No. of Convolution",
      leftSymbol: "N",
      leftValue: "9",
      leftUnit: "Nos",

      rightLabel: "Collar Thickness",
      rightSymbol: "tc",
      rightValue: "0",
      rightUnit: "mm",
    },

    {
      leftLabel: "Layer Thickness",
      leftSymbol: "t",
      leftValue: "1.27",
      leftUnit: "mm",

      rightLabel: "Collar Area",
      rightSymbol: "Atc",
      rightValue: "0",
      rightUnit: "mm²",
    },

    {
      leftLabel: "No. of Layers",
      leftSymbol: "n",
      leftValue: "1",
      leftUnit: "No",

      rightLabel: "Center Spool Length",
      rightSymbol: "",
      rightValue: "0",
      rightUnit: "mm",
    },

    {
      leftLabel: "Mean Radius",
      leftSymbol: "rm",
      leftValue: "12.5",
      leftUnit: "mm",

      rightLabel: "Center Spool Mass",
      rightSymbol: "Wcs",
      rightValue: "0",
      rightUnit: "Kgs",
    },

    {
      leftLabel: "Convolution Pitch",
      leftSymbol: "q",
      leftValue: "50",
      leftUnit: "mm",

      rightLabel: "Center Spool Angle",
      rightSymbol: "θu",
      rightValue: "0",
      rightUnit: "Deg.",
    },

    {
      leftLabel: "Convolution Depth",
      leftSymbol: "w",
      leftValue: "50",
      leftUnit: "mm",

      rightLabel: "Pipe End Length",
      rightSymbol: "",
      rightValue: "100",
      rightUnit: "mm",
    },

    {
      leftLabel: "Tangent End ID",
      leftSymbol: "Db",
      leftValue: "2320",
      leftUnit: "mm",

      rightLabel: "Pipe End Thickness",
      rightSymbol: "tpe",
      rightValue: "10",
      rightUnit: "mm",
    },
  ],

  material: [
    {
      leftLabel: "Bellows Element",
      leftValue: "Inconel 625",

      rightLabel: "Center Spool",
      rightValue: "N.A",
    },

    {
      leftLabel: "Collar",
      leftValue: "N.A",

      rightLabel: "Bellows in Creep Range",
      rightValue: "No",
    },

    {
      leftLabel: "Pipe End",
      leftValue: "SA 240 TYPE 304L",

      rightLabel: "Bellows Material Yield",
      rightValue: "414 MPa",
    },
  ],

  summary: [
    {
      code: "Cd",
      description:
        "Factor used in specific design calculation to relate U-shaped bellows convolutions segment behaviour to simple strip beam",
      value: "1.7048",
      unit: "",
    },

    {
      code: "Cf",
      description: "",
      value: "1.7033",
      unit: "",
    },

    {
      code: "Cp",
      description: "",
      value: "0.6634",
      unit: "",
    },

    {
      code: "Ku",
      description:
        "Factor establishing relationship between equivalent axial displacement per convolution due to lateral deflection and the ration",
      value: "N.A",
      unit: "",
    },

    {
      code: "S1",
      description:
        "Bellows Tangent Circumferential Membrane Stress Due to Pressure",
      value: "28.0563",
      unit: "MPa",
    },

    {
      code: "S'1",
      description: "Collar Circumferential Membrane Stress Due to Pressure",
      value: "N.A.",
      unit: "MPa",
    },

    {
      code: "S2",
      description: "Bellows Circumferential Membrane Stress Due to Pressure",
      value: "46.9124",
      unit: "MPa",
    },

    {
      code: "S3",
      description: "Bellows Meridional Membrane Stress Due to Pressure",
      value: "1.9901",
      unit: "MPa",
    },

    {
      code: "S4",
      description: "Bellows Meridional Bending Stress Due to Pressure",
      value: "52.5494",
      unit: "MPa",
    },

    {
      code: "S5",
      description: "Bellows Meridional Membrane Stress Due to Deflection",
      value: "10.6543",
      unit: "MPa",
    },

    {
      code: "S6",
      description: "Bellows Meridional Bending Stress Due to Deflection",
      value: "1412.3173",
      unit: "MPa",
    },

    {
      code: "Sab",
      description: "Bellows Allowable Stress",
      value: "147.2",
      unit: "MPa",
    },

    {
      code: "Eb",
      description: "Bellows E at temperature",
      value: "170800",
      unit: "MPa",
    },

    {
      code: "Sy",
      description: "Bellows Yield at temperature",
      value: "409.203",
      unit: "MPa",
    },

    {
      code: "ec",
      description: "Rated Max Axial Movement",
      value: "213.57",
      unit: "mm",
    },

    {
      code: "ee",
      description: "Rated Max Axial Movement",
      value: "225",
      unit: "mm",
    },

    {
      code: "",
      description: "Total Equiv. Axial Movement",
      value: "125.0001",
      unit: "mm",
    },

    {
      code: "fiu",
      description: "Axial Spring Rate",
      value: "712.2796",
      unit: "N/mm",
    },

    {
      code: "Vl",
      condition: "condition 1",
      description: "Lateral Spring Rate",
      value: "N.A.",
      unit: "N/mm",
    },

    {
      code: "Vl",
      condition: "condition 2",
      description: "Lateral Spring Rate",
      value: "N.A",
      unit: "N/mm",
    },

    {
      code: "Mθ",
      condition: "condition 1",
      description: "Bending Spring Rate",
      value: "0",
      unit: "N.m / Deg.",
    },

    {
      code: "Mθ",
      condition: "condition 2",
      description: "Bending Spring Rate",
      value: "0",
      unit: "N.m / Deg.",
    },

    {
      code: "Psi",
      description: "Inplane Instability",
      value: "0.3846",
      unit: "MPa",
    },

    {
      code: "Psc",
      condition: "condition 1",
      description: "Column Instability",
      value: "1.6907",
      unit: "MPa",
    },

    {
      code: "Psc",
      condition: "condition 2",
      description: "Column Instability",
      value: "1.6907",
      unit: "MPa",
    },

    {
      code: "Nc",
      description: "Allowed Cycle",
      value: "27496",
      unit: "Nos.",
    },

    {
      code: "Le",
      description: "Bellows Length",
      value: "500",
      unit: "mm",
    },

    {
      code: "Lb",
      description: "Bellows Convoluted Length",
      value: "450",
      unit: "mm",
    },

    {
      code: "Lu",
      description: "Bellows Length",
      value: "0",
      unit: "mm",
    },

    {
      code: "",
      description: "Total Length",
      value: "650",
      unit: "mm",
    },

    {
      code: "tp",
      description: "Thickness",
      value: "1.2562",
      unit: "mm",
    },

    {
      code: "Ae",
      description: "Effective Area",
      value: "4416232.1506",
      unit: "mm²",
    },

    {
      code: "",
      description: "Thrust Force",
      value: "441.6232",
      unit: "kN",
    },
  ],
};
