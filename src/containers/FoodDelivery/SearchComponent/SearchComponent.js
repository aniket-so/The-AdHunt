// components/SearchComponent.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import arrowIcon from 'common/assets/image/foodDelivery/banner-arrow.svg';

const SearchComponent = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://172.203.170.19:8055/items/items/?access_token=Qmm3cucjSQAOwXPilvrRb8qW_El8lET1`
            );
            const { data } = await response.json();
            const names = data.map((item) => item.name);
            setSearchResults(names);
            setShowDropdown(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.trim() === '') {
            setShowDropdown(false);
        }
    };

    const handleSelect = (name) => {
        setSearchTerm(name);
        setShowDropdown(false);
    };

    const handleRoute = (e) => {
        e.preventDefault();

        if (searchTerm) {
            const formattedSearchTerm = searchTerm.toLowerCase().replace(/\s+/g, '-');
            router.push(`/platform/${formattedSearchTerm}`);
        }
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Channel, Media.."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleSearch}
                />
                <button type="submit" className="bannerBtn" onClick={(e) => handleRoute(e)}>
                    <img src={arrowIcon?.src} alt="banner button" />
                </button>
            </div>

            {showDropdown && (
                <ul className="dropdown">
                    {searchResults.map((result) => (
                        <li key={result} onClick={() => handleSelect(result)}>
                            {result}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SearchComponent;
