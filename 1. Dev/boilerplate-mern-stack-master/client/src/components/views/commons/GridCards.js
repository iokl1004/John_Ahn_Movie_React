import React from 'react'
import { Col } from 'antd';
function GridCards(props) {

    return (
        // 라지 사이즈 인 경우에는 6size
        // 미디움 사이즈 인 경우에는 3개
        // 가장 작은 사이즈 인 경우에는 1개
        <Col lg={6} md={8} xs={24}>
            <div style={{ position : 'relative' }}>
                <a href={`/movie/${props.movieId}`}>
                    <img style={{ width : '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                </a>
            </div>
        </Col>
    )
}

export default GridCards