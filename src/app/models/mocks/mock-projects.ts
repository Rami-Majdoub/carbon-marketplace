import { Project } from '../project';

export const signers = [
  { address: "0xc1287f1d1d3e9f1ab208ca574d05a3c4fb7065cd" },
  { address: "0xc1287f1d1d3e9f1ab208ca574d05a3c4fb7065cd" },
  { address: "0x6cfb9ea52f8d9d3fd7553eae80a042da8bf1ac69" },
  { address: "0x053edc625ce7b7b22c26c34f454b69dbb455c29a" },
  { address: "0x2882c0c998f0dc004612ae820b5c5292351ae447" },
]

export const PROJECTS: Project[] = [
  {
	  owner: signers[1]?.address,
    name: "\"El Arriero\" Afforestation on degraded grasslands under extensive grazing project",
    location: "Uruguay",
    methods: "Agriculture Forestry and Other Land Use",
	  description: "The project comprises a total of 5,377 ha of land previously under extensive grazing by beef cattle, on which Afforestation for obtaining high-value, long-lived timber products and for sequestering large amounts of carbon dioxide from the atmosphere will be established.",
	  report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
  },
  {
	  owner : signers[2]?.address,
    name: "Karnataka Pavagada-II Solar Project by Avaada (150 MW)",
    location: "Karnataka",
    methods: "Energy industries (renewable/non-renewable sources)",
	  description: "The project activity shall involve installation of total 150 MW (3 X 50 MW) solar photovoltaic grid interactive power plants, proposed in three different blocks in Pavagada Solar Park, in the state of Karnataka (India). The main purpose of this proposed project activity is to generate clean electricity through renewable source of solar energy and to supply generated electricity to the Indian grid system through Karnataka state grid via Power Purchase Agreement (PPA) with ‘Bangalore Electricity Supply Company Limited’ (BESCOM). The project is estimated to have replaced anthropogenic emissions of GHGs estimated to be approximately 319,470 tCO2e annualize average (proposed avg. value of 10 years of projection), thereby displacing 341,009 MWh/year (estimated annualized avg. for 10 years) of electricity from the generation-mix of power plants connected to the Indian electricity grid. PUBLIC COMMENT PERIOD: This project was open for public comment from 20 November – 20 December 2019.",
	  report: "bafkreict7fkbiaf45lled44ujf3qxq6rspqoe4atlm4dag32g2eo5627dm",
  },
  {
	  owner : signers[3]?.address,
    name: "Adjusted Water Management in Rice Cultivation In Anlu City",
    location: "China",
    methods: "Agriculture Forestry and Other Land Use",
	  description: "The project changing from continuously flooded to intermittent flooded condition during rice cultivation is conducted in Anlu City within Xiaogan City, Hubei Province of China, with a total acreage of 13,298 ha for single-cropping rice. Without the implementation of this project, which provides ditches to conduct intermittently flooded method, the continuously flooded method would be continued, so the scenario that rice was cultivated by continuously flooded method is the baseline scenario. Since the organic matter in rice soil under flooded condition can emit a large amount of methane (CH4) because of anaerobic decomposition, the intermittent flooded method is more beneficial to water conservation, production increase and methane emission reduction than the continuously flooded. This project solved the problems of excessive water used during rice cultivation which results in not only large amount of methane (CH4) emissions but also low rice productivity by replacing the continuously flooded method with intermittent flooded method, which shortens the period of anaerobic decomposition of soil organic matter. In this case, the CH4 emission can be declined by an average of 48%1 . Hence, with the proposed project activity, an estimated amount of GHG emission reduction 4.32tCO2e/ha for single-cropping rice is expected. Annual average estimation of GHG emission reductions from the project activity is 57,504 tCO2e/year, and the total GHG emission reductions are 575,040 tCO2e during the fixed 10 years crediting period. This project aims to:  Sequester greenhouse gas and mitigate climate changes;  Increase the rice productivity resulting in higher living standard of local farmers;  Provide more job opportunities, especially women workers;  Increase in the number of individuals with improved capacity due to diversified educational opportunities from Trainings.",
	  report: "bafkreiemyglfviirtp7r73sbihiwipm7me76w5sqzfdcjafukeawo3viaa",
  },
  {
	  owner : signers[4]?.address,
    name: "Selva de Urundel REDD+ Project",
    location: "Argentina",
    methods: "Agriculture Forestry and Other Land Use",
	  description: "The Selva de Urundel REDD+ Project, seeks to enforce the protection of the native forest and the biodiversity of the Urundel forest located in the Province of Salta, Department of Oran, in northern Argentina. The Project started in January 2021 and is expected to reduce emissions by 3,513,643.40 tCO2eq in the first 10 years through 9,647 hectares of avoided deforestation, at an average of 351,364.34 tCO2eq per year. The project is expected to generate emission reductions through the reduction of deforestation and forest cover loss by implementing several activities that include the prevention and control of fires, the control of illegal activities occurring in the property (hunting, logging, grazing), the training and capacity building, as well as the cooperation with different institutions to promote alternative activities in the property including among others ecotourism and scientific research. This project is particularly relevant as it aims to preserve a territory which is part of the Yungas Biosphere Reserve, included in UNESCO’s Man and Biosphere Program (MAB) thanks to the arrangement of the Yungas mountain ranges which present a discontinuous and insular distribution that creates conditions for the coexistence of great biological diversity.",
	  report: "bafkreicti3526corah2vi3gtr4mtmdaojnwqsbiilqr4voxewkhwc3b2ei",
  },
];
