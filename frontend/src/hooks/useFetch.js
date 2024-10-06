import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)
            try {
                const res = await fetch(url)

                if (!res.ok) {
                    setError('failed to fetch')
                    // alert('failed to fetch')
                }

                const result = await res.json()
                setData(result.data)
                setLoading(false)

            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        };

        fetchData();

    }, [url]);
    return { data, error, loading };
};

export default useFetch;




// import { useState, useEffect } from 'react';

// const useFetch = (url) => {

//     const [data, setData] = useState([])
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [page, setPage] = useState(1)

//     useEffect(() => {

//         const fetchData = async () => {

//             setLoading(true)
//             try {
//                 const res = await fetch(`${url}?page=${page}`)

//                 if (!res.ok) {
//                     setError('failed to fetch')
//                     alert('failed to fetch')
//                 }

//                 const result = await res.json()
//                 setData((prevData) => [...prevData, ...result.data])

//             } catch (err) {
//                 setError(err.message)
//                 setLoading(false)
//             }
//         };

//         fetchData();

//     }, [url, page]);
//     return { data, error, loading, page, setPage };
// };

// export default useFetch;