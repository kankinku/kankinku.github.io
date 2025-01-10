// GitHub 사용자 이름 설정 (여기에 사용자명을 입력하세요)
const username = "kankinku";  // 예: const username = "octocat";

// GitHub 기여 그래프를 가져오는 함수
async function fetchGitHubContributions() {
    try {
        const response = await fetch(`https://ghchart.rshah.org/${username}`);
        if (response.ok) {
            const svg = await response.text();
            document.querySelector(".calendar").innerHTML = svg;
        } else {
            console.error("기여 그래프를 불러오는 데 실패했습니다.");
        }
    } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
    }
}

// 페이지 로딩 시 기여 그래프 로딩
fetchGitHubContributions();
