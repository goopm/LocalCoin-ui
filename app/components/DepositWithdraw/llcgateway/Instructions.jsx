import React from "react";
import Translate from "react-translate-component";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import WithdrawModal from "./WithdrawModal";

class Instructions extends React.Component {
    address = null;

    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            modalActive: false,
            addressText: props.depositAddress
        };

        this.activateModal = this.activateModal.bind(this);

        this._copy = this._copy.bind(this);
        document.addEventListener("copy", this._copy);
    }

    _copy(e) {
        try {
            if (this.state.clipboardText)
                e.clipboardData.setData("text/plain", this.state.clipboardText);
            // else
            //     e.clipboardData.setData(
            //         "text/plain",
            //         counterpart
            //             .translate("gateway.use_copy_button")
            //             .toUpperCase()
            //     );
            e.preventDefault();
        } catch (err) {
            console.error(err);
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            type: props.type,
            addressText: props.depositAddress
        });
    }

    activateModal() {
        this.setState({
            modalActive: true
        });
    }

    deactivateModal() {
        this.setState({
            modalActive: false
        });
    }

    toClipboard(clipboardText) {
        try {
            this.setState({clipboardText}, () => {
                document.execCommand("copy");
            });
        } catch (err) {
            console.error(err);
        }
    }

    getConfirmations(asset) {
        switch (asset) {
            case "BTC":
                return 2;
            case "LTC":
                return 6;
            case "DSH":
                return 6;
            case "TTRUSD":
                return 2;
            case "TTREUR":
                return 2;
            case "ETH":
                return 6;
            case "XMR":
                return 10;
        }
        return "x";
    }

    render() {
        let countConfirmations = this.getConfirmations(
            this.props.currency.asset
        );
        return (
            <div className="small-12 medium-7">
                <h4>
                    {this.state.type == LLCGateway.WITHDRAW
                        ? counterpart.translate("gateway.withdraw_inst")
                        : counterpart.translate("gateway.deposit_inst")}
                </h4>
                <div style={{padding: "10px 0px", fontSize: "1.1rem"}}>
                    {this.state.type == LLCGateway.WITHDRAW ? (
                        <div>
                            <label className="left-label">
                                <span>
                                    <Translate
                                        content="gateway.withdraw_to"
                                        asset={this.props.currency.asset}
                                    />
                                </span>
                                :
                            </label>
                            <div
                                className="button-group"
                                style={{paddingTop: 20}}
                            >
                                <button
                                    onClick={this.activateModal}
                                    className="button btn large inverted"
                                    style={{fontSize: "1.3rem"}}
                                >
                                    <span>
                                        {counterpart.translate(
                                            "gateway.withdraw_now"
                                        )}
                                    </span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <label className="left-label">
                                <Translate
                                    content="gateway.deposit_to"
                                    asset={this.props.currency.asset}
                                />
                                :
                            </label>
                            <label className="left-label">
                                <b>
                                    <span>
                                        <Translate
                                            content="gateway.rudex.min_amount"
                                            minAmount={
                                                this.props.currency.minimal
                                            }
                                            symbol={this.props.currency.asset}
                                        />
                                    </span>
                                </b>
                            </label>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            {counterpart
                                                .translate("gateway.address")
                                                .toUpperCase()}
                                            :&nbsp;
                                            <b>
                                                <span style={{wordBreak: "break-all", whiteSpace: "normal"}}>
                                                    {this.state.addressText}
                                                </span>
                                            </b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <Translate
                                className="deposit-withdraw-info"
                                component="b"
                                content="gateway.min_count_confirmations"
                                cnt={countConfirmations}
                            />

                            <Translate
                                className="has-error fz_14"
                                component="p"
                                content="gateway.min_deposit_warning_asset"
                                minDeposit={this.props.currency.minimal}
                                coin={this.props.currency.asset}
                            />
                            <div
                                className="button-group"
                                style={{paddingTop: 10}}
                            >
                                <div
                                    className="button btn large outline"
                                    onClick={this.toClipboard.bind(
                                        this,
                                        this.state.addressText
                                    )}
                                >
                                    {counterpart.translate(
                                        "gateway.copy_address"
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <WithdrawModal
                    bullet={this}
                    active={this.state.modalActive}
                    account={this.props.account}
                    currency={this.props.currency}
                />
            </div>
        );
    }
}

export default Instructions;
