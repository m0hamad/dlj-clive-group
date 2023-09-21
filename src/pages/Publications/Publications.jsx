import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import Banner from '../../components/Banner/Banner'
import './publications.css'
import patents from '../../assets/files/patents.json'
import encyclopediaArticles from '../../assets/files/encyclopediaArticles.json'
import axios from 'axios';

const Publications = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const file = await fetch('./Publications.xlsx');
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data, { type: 'binary' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet)
            setData(jsonData);
        }

        fetchData()
            .catch(console.error);

    }, [])

    const checkImage = idx => {
        axios
            .get(`./images/publications/${idx}.png`)
            .then(() => {
                console.log('trueeeee')
                return true;
            })
            .catch(() => {
                console.log('falseeeee')
                return false;
            });
    }

    return (
        <>
            <Banner text="Publications" />
            <div>
                <ol className='publication-ol' >
                    {data.map(({ Title, Authors, Publishers, Year, Volume, Pages, DOI }, idx) =>
                        <li className='publication-li' style={{ listStylePosition: 'inside', }} key={idx}>

                            <span>
                                {Title && <span dangerouslySetInnerHTML={{ __html: Title }} />}
                                {Authors && `, ${Authors}`}
                                {Publishers && <i> {Publishers}</i>}
                                {Year && <b> {Year}</b>}
                                {Volume && `, ${Volume}`}
                                {Pages && `, ${Pages}`}
                                {DOI && <><span> (</span><a className='doi-url' target='_blank' href={DOI}>DOI</a><span>)</span></>}
                                .
                            </span>
                            <div>
                                <img
                                    className='row-img hide-me'
                                    src={`./images/publications/${idx + 1}.png`}
                                    onLoad={(event) => event.currentTarget.classList.remove('hide-me')}
                                />
                            </div>
                        </li>
                    )

                    }
                </ol>
            </div>
            <br />
            <h3 className='publications-h3' >Patents</h3>
            <hr className='publications-hr' />
            <ol>
                {
                    patents.map((p, idx) =>
                        <li
                            dangerouslySetInnerHTML={{ __html: p.text }}
                            style={{ listStylePosition: 'inside', }}
                            key={idx}
                        />
                    )
                }
            </ol>
            <br />
            <h3 className='publications-h3' >Encyclopedia Articles</h3>
            <hr className='publications-hr' />
            <ol>
                {
                    encyclopediaArticles.map((ea, idx) =>
                        <li
                            dangerouslySetInnerHTML={{ __html: ea.text }}
                            style={{ listStylePosition: 'inside', }}
                            key={idx}
                        />
                    )
                }
            </ol>
        </>
    )
}

export default Publications