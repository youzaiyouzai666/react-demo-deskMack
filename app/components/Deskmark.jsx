import React from 'react';

import CreateBar from './CreateBar';
import List from './List';

export default class App extends React.Component {
    constructor() {
        super();

        this.state      = {
            items     : [{
                content: "1111",
                id     : "9ccacca2-b801-43a2-8c81-2bc73dbf9283",
                time   : 1494487845409,
                title  : "11"
            }],
            selectedId: null,
            editing   : false,
        };
        this.createItem = this.createItem.bind(this);
    }

    createItem() {
        this.setState({
            selectedId: null,
            editing   : true,
        });
    }

    render() {
        const {items, selectedId, editing} = this.state;
        const selected = selectedId && items.find(item => item.id === slectedId);
        const mainPart = editing
            ? (<ItemEditor
                item={selected}
                onSave={this.saveItem}
                onCancel={this.cancelEdit}
            />)
            : ( <ItemShowLayer
                item={selected}
                onEdit={this.editItem}
                onDelete={this.deleteItem}
            />);
        return (
            <section className="deskmark-component">
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                    <a className="navbar-brand" href="#">Deskmark App</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list-group">
                            <CreateBar onClick={this.createItem}/>
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
    }
}