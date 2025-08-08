

const DevOverview = () => 
{
    return (
        <div className="App">
        <header className="App-header">
        <div id='card'>
            <div id='pro'>
            <h2 id='pro_title'>Developer Overview</h2>
            <ul id='devOverview'>
                <li>
                    <label>Experience: 5 years</label>
                </li>
                <li>
                    <label>Tech Stack: Python [Django] <br/> TypeScript/JavaScript [React/Vue] <br/> SQL [PostgreSQL/MSSQL] <br/> C# <br/> Java</label>
                </li>
                <li>
                    <label>Development preference: Backend systems, but full-stack capable</label>
                </li>
                <li>
                    <label>Projects available on GitHub</label>
                </li>
            </ul>
        </div>
        <button id='viewSwitch' ><a href='/'>Go back </a></button>
        </div>
        </header>
        </div>
    );
}

export default DevOverview;