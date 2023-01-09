// create a new file called multiSelect.tsx

import React, { useEffect, useState } from 'react';
import styles from './select.module.scss';

export interface ddlProps {
    options: string[];
    values: string[];
    onChange: (values: string[]) => void;
}

export default function DDLsmall(prop: ddlProps) {

}
