import React, { createContext, useCallback, useContext, useMemo } from 'react'
import { useNavigate, } from 'react-router';
import { auth, onAuthStateChanged } from "~/firebase/config.js"
import { Spin } from 'antd'
import { useEffect, useState } from 'react';
import { AuthContext } from './authProvider';
import useFireStore from '~/hook/useFirestore';
import useFireStoreCollection from '~/hook/useFireStoreCollection';

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [showTableData, setShowTableData] = useState(false)
    const [chartType, setChartType] = useState('BarChart');
    const [selectedChartID, setSelectedChartID] = useState('');
    const [chartTitleSelected, setChartTitleSelected] = useState('');
    const [chartData, setChartData] = useState([])

    const chartList = useFireStoreCollection(chartType)


    return (
        <AppContext.Provider value={{showTableData, setShowTableData,  setChartData, chartData, chartTitleSelected, setChartTitleSelected, chartList, chartType, setChartType }}>
            {children}
        </AppContext.Provider>
    )
}
