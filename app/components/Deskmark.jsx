export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="deskmark-component">
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                    <a className="navbar-brand" href="#">Deskmark App</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list-group">
                            <CreateBar onClick={this.createItem} />
                            <List
                                items={this.state.items}
                                onSelect={this.selectItem}
                            />
                        </div>
                        {mainPart}
                    </div>
                </div>
            </section>
        )
    };


}