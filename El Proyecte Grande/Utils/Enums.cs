using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace El_Proyecte_Grande.Utils
{
    public enum GenderTypes
    {
        Female,
        Male,
        Unknown
    }
    public enum PriorityTypes
    {
        High,
        Medium,
        Low
    }
    public enum StatusTypes
    {
        [Display(Name = "Lead Id")]
        LeadId,
        [Display(Name = "Contact Made")]
        ContactMade,
        [Display(Name = "Meeting Arranged")]
        MeetingArranged,
        [Display(Name = "Needs Defined")]
        NeedsDefined,
        [Display(Name = "Proposal Made")]
        ProposalMade,
        [Display(Name = "Negotiations Started")]
        NegotiationsStarted,
        Sealed,
        Failed

    }
    public enum UserPosition
    {
        Manager,
        Salesman,
        Admin
    }

    public enum LocationTypes
    {
        Virtual,
        Physical
    }

    public enum SocialMediaChannell
    {
        LinkeIn,
        Instagram,
        Twitter,
        Facebook,
        Slack,
        Dribbble,
        Reddit,
    }
}
