import PropTypes from "prop-types"

export function EditIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="#000000" className={className}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <title></title>
                <g id="Complete">
                    <g id="edit">
                        <g>
                            <path
                                d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                                fill="none"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            ></path>
                            <polygon
                                fill="none"
                                points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            ></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

EditIcon.propTypes = {
    className: PropTypes.string,
}
