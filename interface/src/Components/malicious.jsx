import React from "react";
import { Table} from 'react-bootstrap';
import FilterableTable from "react-filterable-table";


export default class Malicious extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            d: new Date().toString(), // The 0 there is the key, which sets the date to the epoch
        }
    }


    
    render() {
 
        // Data for the table to display; can be anything
        let data = [
            { alert: "CaptureLoss::Too_Much_Loss", meaning: 27, urgent: "No" },
            { alert: "Conn::Ack_Above_Hole", meaning: 27, urgent: "" },
            { alert: "Conn::Content_Gap", meaning: 27, urgent: "" },
            { alert: "Conn::Retransmission_Inconsistency", meaning: 27, urgent: "" },
            { alert: "FTP::Bruteforcing", meaning: 27, urgent: "Yes" },
            { alert: "DNS::External_Name", meaning: 27, urgent: "" },
            { alert: "FTP::Site_Exec_Success", meaning: 27, urgent: "Yes" },
            { alert: "HTTP::SQL_Injection_Attacker", meaning: "Indicates that a host performing SQL injection attacks was detected.", urgent: "Yes" },
            { alert: "HTTP::SQL_Injection_Victim", meaning: "Indicates that a host was seen to have SQL injection attacks against it. This is tracked by IP address as opposed to hostname.", urgent: "Yes" },
            { alert: "Intel::Notice", meaning: "This notice is generated when an intelligence indicator is denoted to be notice-worthy.", urgent: "No" },
            { alert: "PacketFilter::Dropped_Packets", meaning: "Indicates packets were dropped by the packet filter.", urgent: "Yes" },
            { alert: "SMTP::Blocklist_Blocked_Host", meaning: 27, urgent: "Yes" },
            { alert: "SMTP::Blocklist_Error_Message", meaning: 27, urgent: "Yes" },
            { alert: "SMTP::Suspicious_Origination", meaning: 27, urgent: "Yes" },
            { alert: "SSH::Interesting_Hostname_Login", meaning: 27, urgent: "No" },
            { alert: "SSH::Login_By_Password_Guesser", meaning: "Indicates that a host previously identified as a “password guesser” has now had a successful login attempt. ", urgent: "Yes" },
            { alert: "SSH::Password_Guessing", meaning: "A host on your network is trying to guess a passwrod", urgent: "Yes" },
            { alert: "SSH::Watched_Country_Login", meaning: "If an SSH login is seen to or from a “watched” country", urgent: "No" },
            { alert: "SSL::Certificate_Expired", meaning: "Indicates that a certificate’s NotValidAfter date has lapsed and the certificate is now invalid.", urgent: "Yes" },
            { alert: "SSL::Certificate_Expires_Soon", meaning: "Indicates that a certificate is going to expire within 30 days", urgent: "No" },
            { alert: "SSL::Certificate_Not_Valid_Yet", meaning: "Indicates that a certificate’s NotValidBefore date is future dated.", urgent: "Yes" },
            { alert: "SSL::Invalid_Server_Cert", meaning: 27, urgent: "Yes" },
            { alert: "Scan::Address_Scan", meaning: 27, urgent: "No" },
            { alert: "Scan::Port_Scan", meaning: 27, urgent: "No" },
            { alert: "Signatures::Count_Signature", meaning: 27, urgent: "" },
            { alert: "Signatures::Multiple_Sig_Responders", meaning: 27, urgent: "" },
            { alert: "Signatures::Multiple_Signatures", meaning: 27, urgent: "" },
            { alert: "Signatures::Sensitive_Signature", meaning: 27, urgent: "" },
            { alert: "Software::Software_Version_Change", meaning: "For certain software, a version changing may matter.", urgent: "No" },
            { alert: "Software::Vulnerable_Version", meaning: "Indicates that a vulnerable version of software was detected.", urgent: "Yes" },
            { alert: "TeamCymruMalwareHashRegistry::Match", meaning: 27, urgent: "Yes" },
            { alert: "Traceroute::Detected", meaning: "Indicates that a host was seen running traceroutes", urgent: "No" },
            { alert: "Notice::Tally", meaning: "Generic unusual but notice-worthy weird activity", urgent: "No" },

        ];
        
        // Fields to show in the table, and what object properties in the data they bind to
        let fields = [
            { name: 'alert', displayName: "Alert message", inputFilterable: true, sortable: true },
            { name: 'meaning', displayName: "Meaning", inputFilterable: true, exactFilterable: true, sortable: true },
            { name: 'urgent', displayName: "Urgent?", inputFilterable: true, exactFilterable: true, sortable: true },

        ];
        return(
            <div>
                <p>As of {this.state.d}, here are the suspicious activity and alerts caught by Schniffer, 
                sorted by date of detection</p>
                <p>To stay up-to-date on realtime alerts, set up email alerts in your account settings!</p>
                <MaliciousTable />
                <h3>Confused? Don't worry!</h3>
                <p>Schniffer scans your network in realtime for anything suspicious or just, plain old weird, 
                    and we save the scanner alerts into a log, which is what you are seeing here! We use a network
                    scanner tool called Bro Scan, and as you can see in the activities column, Bro Scan has its own
                    names for different activities. We will explain more in detail what each of them means for you!
                </p>
                <FilterableTable
                    namespace="People"
                    initialSort="name"
                    data={data}
                    fields={fields}
                    noRecordsMessage="There are no records to display"
                    noFilteredRecordsMessage="No people match your filters!"
                />
                <PageText />
                </div>
        );
    }
}

const MaliciousTable = () => (
    <Table  bordered condensed hover className="table">
        <thead>
        <tr>
        <th>Timestamp</th>
        <th>IP Targeted</th>
        <th>Activity</th>
        <th>Recommended Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>{new Date(1526671153000).toString()}</td>
        <td>192.168.245.103</td>
        <td>SSL::Certificate_Expires_Soon</td>
        <td>check files downloaded</td>
        </tr>
        <tr>
        <td>{new Date(1526269583000).toString()}</td>
        <td>192.168.245.1</td>
        <td>SMTP::Blocklist_Blocked_Host</td>
        <td>check network connection</td>
        </tr>
        <tr>
        <td>{new Date(1526111122000).toString()}</td>
        <td>192.168.245.128</td>
        <td>HTTP::SQL_URI_Injection_Attack</td>
        <td>review activity</td>
        </tr>
        </tbody>
    </Table>
)

const PageText = () => (
    <div>
        <h3>Ah thanks for the explanations, but where can I find out more information?</h3>
        <p>the internet?</p>
        <h3>Oh no! What do I do if I have recent urgent alerts?</h3>
        <p>pray</p>
        <h3>What's this Bro Scan thing you were talking about earlier? </h3>
        <p>link to broscan</p>
        
    </div>
)