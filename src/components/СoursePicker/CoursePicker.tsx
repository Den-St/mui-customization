import { Box, FormControlLabel, Radio, RadioGroup, Typography, useTheme } from "@mui/material";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { useState } from "react";
import type { CourseT } from "./CourseT";

export const CoursePicker = () => {
    const theme = useTheme();
    const [courses] = useState<CourseT[]>([
        { id: "1", name: "10 січня – 19 січня, 2025", open: false },
        { id: "2", name: "26 квітня – 30 квітня, 2025", open: true },
        { id: "3", name: "3 серпня – 11 серпня, 2025", open: false },
    ]);
    const [selectedCourse, setSelectedCourse] = useState<string>(courses[0].id);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCourse(event.target.value);
    };
    return <RadioGroup
            value={selectedCourse}
            onChange={onChange}
            defaultValue={courses[0].id}
            sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '537px', padding: '32px' }}>
            {courses.map((course) => (
                <Box key={course.id} 
                sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '18px 16px', borderRadius: '8px', border: course.id === selectedCourse ? `2px solid ${theme.palette.blue[200]}` : `2px solid ${theme.palette.customGrey[80]}`, }}>
                    <FormControlLabel sx={{gap: '14px', margin: 0}} value={course.id} control={<Radio />} label={course.name} />
                    <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center'}}>
                        <TimerOutlinedIcon sx={{color: course.open ? theme.palette.blue[200] : theme.palette.customGrey[70]}} />
                        <Typography variant="body2" color={course.open ? theme.palette.blue[200] : theme.palette.customGrey[70]}>
                            {course.open ? "Реєстрацію відкрито" : "Реєстрацію закрито"}   
                        </Typography> 
                    </Box>
                </Box>))}
    </RadioGroup>;
}