enum AvailableManagers {
    NPM = 'npm',
    PNPM = 'pnpm',
    YARN = 'yarn'
}

type Commands = {
    [Key in keyof AvailableManagers]: string;
}


export default function PreferredManager({ commands }: { commands: Commands }) {
    return <div className="flex">
            {Object.values(AvailableManagers).map((managerName:string, i:number) => (<details open={i === 0}>
                <summary>{managerName}</summary>
                <div>
                    <pre><code>{commands[managerName]}</code></pre>    
                </div>
            </details>))}
        </div>
}