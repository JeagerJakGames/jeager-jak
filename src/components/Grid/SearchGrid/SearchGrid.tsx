import React from "react";

interface SearchGridProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchGrid(prop: SearchGridProps) {
    const { setSearch } = prop;
    const [searchTemp, setSearchTemp] = React.useState<string>("");

    return (
        <div>
            <button
                onClick={() => {
                    setSearch(searchTemp);
                    // search database
                }}
            >
                Search
            </button>
            <input
                type="text"
                placeholder="Search Results"
                onChange={e => setSearchTemp(e.target.value)}
            />
        </div>
    )
}