import { Auditor } from "../auditor"

import { signers } from "./mock-signers"

export const AUDITOR: Auditor[] = [
  {
    id: signers[9].address,
    account: signers[9].address,
    name: 'AENOR International S.A.U.',
    contact:
      'José Luis Fuentes Pérez, jfuentes@aenor.com; medioambiente@aenor.com',
    location: 'Genova 6, 28004 Madrid, Spain',
    website: 'www.aenor.es',
  },
  {
    id: signers[8].address,
    account: signers[8].address,
    name: '4K Earth Science Private Limited',
    contact: 'Ms. Chandrakala, doe@4kearthscience.com',
    location:
      'No 20, "SNS Arcade", Basement Floor, Konena Agrahara, Old Airport Road, Bangalore-560017, Karnataka, India',
    website: 'www.4kearthscience.com',
  },
  {
    id: signers[7].address,
    account: signers[7].address,
    name: 'Agri-Waste Technology, Inc.',
    contact: 'Hal Langenbach, hlangenbach@agriwaste.com',
    location: '501 N. Salem Street, Suite 201, Apex, NC 27502 USA',
    website: 'https://agriwaste.com/',
  },
  {
    id: signers[6].address,
    account: signers[6].address,
    name: 'Aster Global Environmental Solutions, Inc.',
    contact: 'Janice McMahon, jmcmahon@asterglobal.com (+1) 330.294.1242',
    location: '3800 Clermont St NW, North Lawrence, Ohio, 44666, USA',
    website: 'www.asterglobal.com',
  },
];