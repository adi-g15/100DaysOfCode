export class BoardPrinter{

    readonly boxlen: number = 2
    readonly terminalDimen: [number, number] = [160,40];
    readonly termWidth: number;

    constructor(){
        this.termWidth = this.terminalDimen[0];
    }

    //Defintions Start
    // constructor( const Array<Array<ludo_box>>& boardToLink ) : board(boardToLink){
    //     boxlen = 0;
    //     termWidth = this.terminalDimen.0;
    // }

    //	DEFINITIONS	start//
    // msgScreen(const std::string& msg){
    //     titleBar();
    //     std::pair<int,int> termDimen = this.terminalDimen;
    //     std::cout<<'\n';

    //     for(int i=0; i<(termDimen.1-3)/2; ++i)	std::cout<<'\n';
    //     customUtil::align_text_center(this.terminalDimen.0, msg);
    //     for(int i=0; i<termDimen.1 - (termDimen.1-3)/2; ++i)	std::cout<<'\n';
    // }

    // errorScreen(const std::string& errMsg){
    //     msgScreen(errMsg);
    // }

    // finishedScreen(){
    //     msgScreen("Khelne ke liye Dhanyawaad :D ");
    // }

    titleBar( width?: number ){	//Considering sufficient width, to be able to play the game

        if(!width)  width = this.terminalDimen[0]

        console.log();
        customUtil::align_text_center(width, "NAMASTE from \"Ludo - The Game\" :D");
        std::cout<<'\n';
        while (width--) std::cout<<'=';
    }

    row_type1(int nrow){
        //Actual-Row Start
        std::cout<<'|';

        for (size_t i = 0; i < (boxlen+1)*6 - 1; i++)
            std::cout<<'\\';

        std::cout<<'|';

        for (size_t i = 0; i < 3; i++){
            customUtil::align_text_center(boxlen, board[nrow][6+i].content);
            std::cout<<'|';
        }

        for (size_t i = 0; i < (boxlen+1)*6 - 1; i++)	std::cout<<'\\';
        std::cout<<"|\n";
        //Actual-Row End
    }

    row_type2(int nrow){
        //!Explanatory comments in row_type1
        std::cout<<'|';

        for (size_t i = 0; i < boxlen; i++)	std::cout<<'\\';	
        customUtil::align_text_center(boxlen+2, board[nrow][1].content);
        for (size_t i = 0; i < (boxlen)*2 + 1; i++)	std::cout<<'\\';
        customUtil::align_text_center(boxlen+2, board[nrow][4].content);
        for (size_t i = 0; i < boxlen; i++) std::cout<<'\\';
        std::cout<<'|';

        for (size_t i = 0; i < 3; i++){
            customUtil::align_text_center(boxlen, board[nrow][6+i].get_box_content());
            std::cout<<'|';
        }

        for (size_t i = 0; i < boxlen; i++)	std::cout<<'\\';
        customUtil::align_text_center(boxlen+2, board[nrow][10].get_box_content());
        for (size_t i = 0; i < (boxlen)*2 + 1; i++)	std::cout<<'\\';
        customUtil::align_text_center(boxlen+2, board[nrow][13].get_box_content());
        for (size_t i = 0; i < boxlen; i++) std::cout<<'\\';
        std::cout<<"|\n";
    }


    row_type3(int nrow){
        //!Explanatory comments in row_type1
        std::cout<<'|';
        for (size_t i = 0; i < 6; i++){
            customUtil::align_text_center(boxlen, board[nrow][i].get_box_content());
            std::cout<<'|';
        }

        for (size_t i = 0; i < (boxlen+1)*3 -1; i++) std::cout<<' ';	
        std::cout<<'|';

        for (size_t i = 9; i < 15; i++){
            customUtil::align_text_center(boxlen, board[nrow][i].get_box_content());
            std::cout<<'|';
        }
        std::cout<<'\n';
    }

    row_type4(int nrow){
        //!Explanatory comments in row_type1
        std::cout<<'|';
            
        customUtil::align_text_center(boxlen, board[nrow][0].get_box_content());	std::cout<<'|';
        for (size_t i = 1; i < 5; i++){
            customUtil::align_text_center(boxlen, board[nrow][i].get_box_content());
            std::cout<<' ';
        }
        customUtil::align_text_center(boxlen, board[nrow][5].get_box_content());  std::cout<<'|';

        for (size_t i = 0; i < (boxlen+1)*3 -1; i++) std::cout<<' ';	
        std::cout<<'|';

        for (size_t i = 9; i < 13; i++){
            customUtil::align_text_center(boxlen, board[nrow][i].get_box_content());	std::cout<<' ';
        }
        for (size_t i = 13; i < 15; i++){
            customUtil::align_text_center(boxlen, board[nrow][i].get_box_content());
            std::cout<<'|';
        }
        std::cout<<'\n';
    }

    inter_type1(){
            //Inter-Row line Start
        customUtil::place_center(termWidth - 15*(boxlen+1) +3 -4);
        std::cout<<"  |";
        for (size_t i = 0; i < boxlen; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < (boxlen)*2 + 1; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < boxlen; i++) std::cout<<'\\';
        std::cout<<'|';

        for(int j=0; j<3; ++j){
            for (size_t i = 0; i < (boxlen); i++) std::cout<<'-';
            std::cout<<'|';
        }

        for (size_t i = 0; i < boxlen; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < (boxlen)*2 + 1; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < boxlen; i++) std::cout<<'\\';
        std::cout<<"|\n";
            //Inter-Row Line end
    }

    inter_type2(){
        customUtil::place_center(termWidth - 15*(boxlen+1) +3 -4);
        std::cout<<"  |";
        for (size_t i = 0; i < boxlen; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < (boxlen)*2 + 1; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < boxlen; i++) std::cout<<'\\';
        std::cout<<'|';

        for (size_t i = 0; i < (boxlen); i++) std::cout<<'-';
            std::cout<<'|';
        for (size_t i = 0; i < (boxlen); i++) std::cout<<' ';
        std::cout<<'|';
        for (size_t i = 0; i < (boxlen); i++) std::cout<<'-';
        std::cout<<'|';

        for (size_t i = 0; i < boxlen; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < (boxlen)*2 + 1; i++)	std::cout<<'\\';
        for (size_t i = 0; i < boxlen+2; i++) std::cout<<'-';
        for (size_t i = 0; i < boxlen; i++) std::cout<<'\\';
        std::cout<<"|\n";
    }

    inter_type3(){
        customUtil::place_center(termWidth - 15*(boxlen+1) +3 -4);	std::cout<<"  |";
        for (size_t i = 0; i < (boxlen+1)*6-1; i++)	std::cout<<'\\';
        std::cout<<'|';

        for (size_t i = 0; i < (boxlen); i++) std::cout<<'-';
            std::cout<<'|';
        for (size_t i = 0; i < (boxlen); i++) std::cout<<' ';
        std::cout<<'|';
        for (size_t i = 0; i < (boxlen); i++) std::cout<<'-';
        std::cout<<'|';

        for (size_t i = 0; i < (boxlen+1)*6-1; i++)	std::cout<<'\\';
        std::cout<<"|\n";
    }

    inter_type4(){
        customUtil::place_center(termWidth - 15*(boxlen+1) +3 -4);
        std::cout<<"  |";
        for (size_t i = 0; i < (boxlen+1)*15-1; i++)	std::cout<<'-';
        std::cout<<"|\n";
    }

    inter_type5(){
        customUtil::place_center(termWidth - 15*(boxlen+1) +3 -4);
        std::cout<<"  |";
        for (size_t i = 0; i < (boxlen+1)*6-1; i++) std::cout<<'-';
        std::cout<<'|';
        for (size_t i = 0; i < (boxlen+1)*3-1; i++) std::cout<<' ';
        std::cout<<'|';
        for (size_t i = 0; i < (boxlen+1)*6-1; i++) std::cout<<'-';
        std::cout<<"|\n";
    }

}