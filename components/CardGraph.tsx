import styles from '../styles/CardGraph.module.css'

export default function CardGraph() {
    // Data that will be rendered within the component.
    const graphData = [{
        completed: 2,
        processed: 6
    }, {
        completed: 8,
        processed: 4
    }, {
        completed: 4,
        processed: 4
    }, {
        completed: 8,
        processed: 1
    }, {
        completed: 2,
        processed: 3
    }, {
        completed: 5,
        processed: 6
    }, {
        completed: 7,
        processed: 1
    }]

    return (
        <div className={styles.cardGraph}>
            {graphData.map(data => (
                <span>
                    <div style={{
                        height: `${data.completed * 10}%`
                    }}></div>
                    <div style={{
                        height: `${data.processed * 10}%`
                    }}></div>
                </span>
            ))}
        </div>
    )
}