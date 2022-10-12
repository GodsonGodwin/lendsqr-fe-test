
export type Status = 'blacklisted' | 'active' | 'inactive' | 'pending';

export interface IUser {
    orgName: string;
    accountBalance: string;
    id: string;
    email: string;
    lastActiveDate: string,
    userName: string;
    status: Status,
    profile: {
      phoneNumber: string;
    },
    education: {
        loanRepayment: string;
    }
    createdAt: string;
  }