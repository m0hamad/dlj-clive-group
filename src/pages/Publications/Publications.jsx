import React, { Fragment, useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import Banner from '../../components/Banner/Banner'

const Publications = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const file = await fetch('/src/assets/files/Publications.xlsx');
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data, { type: 'binary' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet)
            setData(jsonData);
        }

        fetchData()
            .catch(console.error);

    }, [])

    return (
        <>
            <Banner text="Publications" />
            <div>
                <ol>
                    {data.map(({ Title, Authors, Publishers, Year, Volume, Pages, DOI }, idx) =>
                        <li style={{ listStylePosition: 'inside', }} key={idx}>

                            {Title && <span dangerouslySetInnerHTML={{ __html: Title }} />}
                            {Authors && `, ${Authors}`}
                            {Publishers && <i> {Publishers}</i>}
                            {Year && <b> {Year}</b>}
                            {Volume && `, ${Volume}`}
                            {Pages && `, ${Pages}`}
                            .
                        </li>
                    )

                    }
                </ol>
            </div>
        </>
    )
}

export default Publications