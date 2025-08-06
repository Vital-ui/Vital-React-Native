import React, { createContext, useContext } from 'react';
import type { BaseDateProps, CalendarStyles } from '../types';

export type CalendarContextType = BaseDateProps & {
    styles?: CalendarStyles;
};

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendarContext = () => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendarContext must be used within a CalendarProvider');
    }
    return context;
};

export const CalendarProvider: React.FC<CalendarContextType & { children: React.ReactNode }> = ({
    children,
    ...contextValue
}) => {
    return (
        <CalendarContext.Provider value={contextValue}>
            {children}
        </CalendarContext.Provider>
    );
}; 